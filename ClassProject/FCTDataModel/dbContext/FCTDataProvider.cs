using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.Entity.Infrastructure;
using System.Linq.Expressions;
using System.Data;
using System.Data.Entity;

namespace FCTDataModel
{
    public class FCTDataProvider : DbContext
    {
        static FCTDataProvider()
        {
            Database.SetInitializer<FCTDataProvider>(null);
        }

        public FCTDataProvider()
        {
            Database.Connection.ConnectionString = ConfigurationManager.ConnectionStrings["FCTData"].ConnectionString;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        public string LastError
        {
            get;
            private set;
        }

        #region collections

        public DbSet<LogEntry> LogEntries { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Semester> Semesters { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseDetail> CourseDetails { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Instructor> Instructors { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Textbook> Textbooks { get; set; }

        #endregion

        #region core data provider

        public IQueryable<T> Where<T>(Expression<Func<T, bool>> filter)
                                            where T : class
        {
            return Set<T>().Where(filter);
        }

        public T SingleOrDefault<T>(Expression<Func<T, bool>> filter)
                                            where T : class
        {
            return Set<T>().SingleOrDefault(filter);
        }

        public bool Add<T>(T obj) where T : class
        {
            var l = Set<T>();
            l.Add(obj);

            return true;
        }

        public bool Remove<T>(T obj) where T : class
        {
            var l = Set<T>();
            l.Remove(obj);

            return true;
        }

        public bool SaveAll()
        {
            return SaveChanges() >= 0;
        }

        public override int SaveChanges()
        {
            try
            {
                var logs = GetLogEntries().ToList();

                logs.ForEach(l => LogEntries.Add(l.Item1));

                var ret = base.SaveChanges();

                //set added key values
                //if any adds, make sure to log gen'd key values
                if (logs.Where(l => l.Item2 == EntityState.Added).Count() > 0)
                {
                    foreach (var a in logs.Where(l => l.Item2 == EntityState.Added))
                    {
                        a.Item1.SetKeyValues(getKeyValues(a.Item3));
                    }

                    base.SaveChanges(); //save added key values
                }

                return ret;
            }
            catch (Exception ex)
            {
                LastError = ex.Message;
                return -1;
            }
        }

        #endregion

        #region logging helpers

        public void AddLog(object e, string action)
        {
            if (e == null || string.IsNullOrEmpty(action)) return;
            var entity = Entry(e);
            if (entity == null) return;

            LogEntries.Add(new LogEntry(entity, "fctUser", getKeyValues(e))
            {
                action = action,
            });
        }

        private IEnumerable<Tuple<LogEntry, EntityState, object>> GetLogEntries()
        {
            var loggable_states = new List<EntityState>() { EntityState.Added, EntityState.Deleted, EntityState.Modified };

            return from e
                      in ChangeTracker.Entries()
                   where loggable_states.Contains(e.State)
                        && e.Entity.GetType() != typeof(LogEntry) //don't log the log entries (duh)
                   select new Tuple<LogEntry, EntityState, object>(
                          new LogEntry(e, "fctUser", getKeyValues(e.Entity)),
                          e.State,
                          e.Entity);
        }

        private IEnumerable<KeyValuePair<string, object>> getKeyValues(object e)
        {
            var objectContext = ((IObjectContextAdapter)this).ObjectContext;
            var k = objectContext.ObjectStateManager.GetObjectStateEntry(e).EntityKey;

            if (k.EntityKeyValues == null) return null;

            var ret = new List<KeyValuePair<string, object>>();
            foreach (var i in k.EntityKeyValues)
            {
                ret.Add(new KeyValuePair<string, object>(i.Key, i.Value));
            }

            return ret;
        }

        #endregion
    }
}

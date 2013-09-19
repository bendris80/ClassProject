using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace FCTDataModel.dbContext
{
    public class FCTDataProvider : DbContext
    {
        protected DbContext _ctx;

        public DbSet<Author> Authors { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Instructor> Instructors { get; set; }
        public DbSet<Person> People { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Textbook> TextBooks { get; set; }

        public FCTDataProvider()
        {
            _ctx = new DbContext(ConfigurationManager.ConnectionStrings["FCTData"].ConnectionString);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class InstructorManager : BaseManager
    {
         FCTDataProvider db { get; set; }

        public InstructorManager():base()
        {
            db = new FCTDataProvider();
        }

        /// <summary>
        /// Releases the database context for this manager.
        /// </summary>
        private bool disposed = false;
        protected override void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    if (db != null)
                    {
                        db.Dispose();
                        db = null;
                    }
                }
                disposed = true;
            }
            base.Dispose(disposing);
        }
        public bool Save()
        {
            if (!db.SaveAll())
            {
                return false;
            }
            return true;
        }

        #region Instructor
        public IEnumerable<Instructor> GetAllInstructors()
        {
            return db.Instructors;
        }

        public Instructor GetInstructorbyID(int id)
        {
            return db.Instructors.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddInstructor(Instructor v)
        {
            db.Instructors.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveInstructor(Instructor v)
        {
            if (!db.Instructors.Local.Contains(v))
            {
                db.Instructors.Attach(v);
            }
            db.Instructors.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateInstructor(Instructor v)
        {
            if (!db.Instructors.Local.Contains(v))
            {
                db.Instructors.Attach(v);
            }
            db.Entry<Instructor>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Instructor> FindInstructors(Func<Instructor, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Instructors.Where(filter);
        }
        #endregion
    }
}

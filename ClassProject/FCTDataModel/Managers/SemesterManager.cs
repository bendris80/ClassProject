using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class SemesterManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public SemesterManager():base()
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

        #region Semester
        public IEnumerable<Semester> GetAllSemesters()
        {
            return db.Semesters;
        }

        public Semester GetSemesterbyID(int id)
        {
            return db.Semesters.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddSemester(Semester v)
        {
            db.Semesters.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveSemester(Semester v)
        {
            if (!db.Semesters.Local.Contains(v))
            {
                db.Semesters.Attach(v);
            }
            db.Semesters.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateSemester(Semester v)
        {
            if (!db.Semesters.Local.Contains(v))
            {
                db.Semesters.Attach(v);
            }
            db.Entry<Semester>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Semester> FindSemesters(Func<Semester, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Semesters.Where(filter);
        }
        #endregion
    }
}

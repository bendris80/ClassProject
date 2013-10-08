using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class EnrollmentManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public EnrollmentManager():base()
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

        #region Enrollment
        public IEnumerable<Enrollment> GetAllEnrollments()
        {
            return db.Enrollments;
        }

        public Enrollment GetEnrollmentbyID(int id)
        {
            return db.Enrollments.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddEnrollment(Enrollment v)
        {
            db.Enrollments.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveEnrollment(Enrollment v)
        {
            if (!db.Enrollments.Local.Contains(v))
            {
                db.Enrollments.Attach(v);
            }
            db.Enrollments.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateEnrollment(Enrollment v)
        {
            if (!db.Enrollments.Local.Contains(v))
            {
                db.Enrollments.Attach(v);
            }
            db.Entry<Enrollment>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Enrollment> FindEnrollments(Func<Enrollment, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Enrollments.Where(filter);
        }
        #endregion
    }
}

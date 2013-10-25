using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class CourseManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public CourseManager():base()
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

        #region Course
        public IEnumerable<CourseDetail> GetAllCourseDetails()
        {
            return db.CourseDetails;
        }

        public IEnumerable<Course> GetAllCourses()
        {
            return db.Courses;
        }

        public Course GetCoursebyID(int id)
        {
            return db.Courses.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddCourse(Course v)
        {
            db.Courses.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveCourse(Course v)
        {
            if (!db.Courses.Local.Contains(v))
            {
                db.Courses.Attach(v);
            }
            db.Courses.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateCourse(Course v)
        {
            if (!db.Courses.Local.Contains(v))
            {
                db.Courses.Attach(v);
            }
            db.Entry<Course>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Course> FindCourses(Func<Course, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Courses.Where(filter);
        }
        #endregion
    }
}

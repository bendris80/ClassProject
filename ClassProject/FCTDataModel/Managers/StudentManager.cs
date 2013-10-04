﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class StudentManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public StudentManager():base()
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

        #region Student
        public IEnumerable<Student> GetAllStudents()
        {
            return db.Students;
        }

        public Student GetStudentbyID(int id)
        {
            return db.Students.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddStudent(Student v)
        {
            db.Students.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveStudent(Student v)
        {
            if (!db.Students.Local.Contains(v))
            {
                db.Students.Attach(v);
            }
            db.Students.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateStudent(Student v)
        {
            if (!db.Students.Local.Contains(v))
            {
                db.Students.Attach(v);
            }
            db.Entry<Student>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Student> FindStudents(Func<Student, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Students.Where(filter);
        }
        #endregion
    }
}
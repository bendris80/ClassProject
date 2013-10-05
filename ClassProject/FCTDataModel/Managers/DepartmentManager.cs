using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class DepartmentManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public DepartmentManager():base()
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

        #region Department
        public IEnumerable<Department> GetAllDepartments()
        {
            return db.Departments;
        }

        public Department GetDepartmentbyID(int id)
        {
            return db.Departments.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddDepartment(Department v)
        {
            db.Departments.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveDepartment(Department v)
        {
            if (!db.Departments.Local.Contains(v))
            {
                db.Departments.Attach(v);
            }
            db.Departments.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateDepartment(Department v)
        {
            if (!db.Departments.Local.Contains(v))
            {
                db.Departments.Attach(v);
            }
            db.Entry<Department>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Department> FindDepartments(Func<Department, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Departments.Where(filter);
        }
        #endregion
    }
}

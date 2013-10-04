using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class PersonManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public PersonManager()
            : base()
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

        #region Person
        public IEnumerable<Person> GetAllPeople()
        {
            return db.People;
        }

        public Person GetPersonbyID(int id)
        {
            return db.People.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddPerson(Person v)
        {
            db.People.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemovePerson(Person v)
        {
            if (!db.People.Local.Contains(v))
            {
                db.People.Attach(v);
            }
            db.People.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdatePerson(Person v)
        {
            if (!db.People.Local.Contains(v))
            {
                db.People.Attach(v);
            }
            db.Entry<Person>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Person> FindPeople(Func<Person, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.People.Where(filter);
        }
        #endregion
    }
}


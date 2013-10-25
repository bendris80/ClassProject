using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class PublisherManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public PublisherManager():base()
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

        #region Publisher
        public IEnumerable<Publisher> GetAllPublishers()
        {
            return db.Publishers;
        }

        public Publisher GetPublisherbyID(int id)
        {
            return db.Publishers.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddPublisher(Publisher v)
        {
            db.Publishers.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemovePublisher(Publisher v)
        {
            if (!db.Publishers.Local.Contains(v))
            {
                db.Publishers.Attach(v);
            }
            db.Publishers.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdatePublisher(Publisher v)
        {
            if (!db.Publishers.Local.Contains(v))
            {
                db.Publishers.Attach(v);
            }
            db.Entry<Publisher>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Publisher> FindPublishers(Func<Publisher, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Publishers.Where(filter);
        }
        #endregion
    }
}

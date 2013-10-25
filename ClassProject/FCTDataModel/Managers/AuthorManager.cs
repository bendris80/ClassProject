using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class AuthorManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public AuthorManager():base()
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

        #region Author
        public IEnumerable<Author> GetAllAuthors()
        {
            return db.Authors;
        }

        public Author GetAuthorbyID(int id)
        {
            return db.Authors.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddAuthor(Author v)
        {
            db.Authors.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveAuthor(Author v)
        {
            if (!db.Authors.Local.Contains(v))
            {
                db.Authors.Attach(v);
            }
            db.Authors.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateAuthor(Author v)
        {
            if (!db.Authors.Local.Contains(v))
            {
                db.Authors.Attach(v);
            }
            db.Entry<Author>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Author> FindAuthors(Func<Author, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Authors.Where(filter);
        }
        #endregion
    }
}

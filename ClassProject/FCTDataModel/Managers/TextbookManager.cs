using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    public class TextbookManager : BaseManager
    {
        FCTDataProvider db { get; set; }

        public TextbookManager():base()
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

        #region Textbook
		public IEnumerable<TextbookDetail> GetAllTextbookDetails()
		{
			return db.TextbookDetails;
		}

        public IEnumerable<Textbook> GetAllTextbooks()
        {
            return db.Textbooks;
        }

        public Textbook GetTextbookbyID(int id)
        {
            return db.Textbooks.Where(v => v.ID == id).FirstOrDefault();
        }

        public bool AddTextbook(Textbook v)
        {
            db.Textbooks.Add(v);
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public bool RemoveTextbook(Textbook v)
        {
            if (!db.Textbooks.Local.Contains(v))
            {
                db.Textbooks.Attach(v);
            }
            db.Textbooks.Remove(v);
            if (!Save())
            {
                return false;
            }
            return true;
        }

        public bool UpdateTextbook(Textbook v)
        {
            if (!db.Textbooks.Local.Contains(v))
            {
                db.Textbooks.Attach(v);
            }
            db.Entry<Textbook>(v).State = EntityState.Modified;
            if (!Save())
            {
                return false;
            }
            return true;

        }

        public IEnumerable<Textbook> FindTextbooks(Func<Textbook, bool> filter)
        {
            if (filter == null)
            {
                return null;
            }
            return db.Textbooks.Where(filter);
        }
        #endregion
    }
}

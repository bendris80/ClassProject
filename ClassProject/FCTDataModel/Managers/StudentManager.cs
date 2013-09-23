using System;
using System.Collections.Generic;
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

        #region Vendor
        //public IEnumerable<Vendor> GetAllVendors()
        //{
        //    return db.Vendors;
        //}

        //public Vendor GetVendorbyID(int id)
        //{
        //    return db.Vendors.Where(v => v.ID == id).FirstOrDefault();
        //}

        //public Vendor GetVendorbyFamCode(string famref)
        //{
        //    return db.Vendors.Where(v => v.ProdFamRef == famref).FirstOrDefault();
        //}

        //public bool AddVendor(Vendor v)
        //{
        //    v.EnteredBy = _context.userid;
        //    v.EnteredOn = DateTime.Now;
        //    v.ModifiedBy = _context.userid;
        //    v.ModifiedOn = DateTime.Now;
        //    db.Vendors.Add(v);
        //    if (!Save())
        //    {
        //        return false;
        //    }
        //    return true;

        //}

        //public bool RemoveVendor(Vendor v)
        //{
        //    if (!db.Vendors.Local.Contains(v))
        //    {
        //        db.Vendors.Attach(v);
        //    }
        //    db.Vendors.Remove(v);
        //    if (!Save())
        //    {
        //        return false;
        //    }
        //    return true;
        //}

        //public bool UpdateVendor(Vendor v)
        //{
        //    if (!db.Vendors.Local.Contains(v))
        //    {
        //        db.Vendors.Attach(v);
        //    }
        //    v.ModifiedBy = _context.userid;
        //    v.ModifiedOn = DateTime.Now;
        //    db.Entry<Vendor>(v).State = EntityState.Modified;
        //    if (!Save())
        //    {
        //        return false;
        //    }
        //    return true;

        //}

        //public IEnumerable<Vendor> FindVendors(Func<Vendor, bool> filter)
        //{
        //    if (filter == null)
        //    {
        //        return null;
        //    }
        //    return db.Vendors.Where(filter);
        //}
        #endregion
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Caching;

namespace FCTDataModel
{
    public abstract class BaseManager : IDisposable
    {
        protected MemoryCache Cache = MemoryCache.Default;

        protected BaseManager() { LastError = ""; }

        public virtual string LastError { get; protected set; }

        protected void SetError(string format, params object[] parms)
        {
            LastError = string.Format(format, parms);
        }

        public virtual bool PurgeCache()
        {
            List<string> cacheKeys = Cache.Select(kvp => kvp.Key).ToList();
            foreach (string cacheKey in cacheKeys)
            {
                Cache.Remove(cacheKey);
            }
            return true;
        }

        #region IDisposable Members

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        ~BaseManager()
        {
            Dispose(false);
        }

        private bool disposed = false;
        /// <summary>
        /// Releases the database context for this manager.
        /// </summary>
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {

                }
                disposed = true;
            }
        }

        #endregion
    }
}

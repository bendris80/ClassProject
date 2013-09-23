using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using FCTDataModel;

namespace ClassProject.Controllers
{
    public class BaseController : Controller
    {
        static BaseController()
        {
            #region Object Maps

            #endregion
        }

        private FCTDataManager _man;
        protected FCTDataManager MarketingManager
        {
            get
            {
                if (_man == null)
                {
                    _man = new FCTDataManager();
                }
                return _man;
            }
        }
           /// <summary>
           /// TODO Call Dispose Methods for each Manager.
           /// </summary>
           /// <param name="disposing"></param>
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_man != null)
                {
                    //_man.Codes.Dispose();
                    //_man.Products.Dispose();
                    //_man.Vendors.Dispose();
                    //_man = null;
                }
                base.Dispose(disposing);
            }
        }

    }
}

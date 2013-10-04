using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using ClassProject.Models;
using FCTDataModel;

namespace ClassProject.Controllers
{
    public class BaseController : Controller
    {
        static BaseController()
        {
            #region Object Maps
            Mapper.CreateMap<vmStudent, Student>();
            Mapper.CreateMap<Student, vmStudent>();
            Mapper.CreateMap<vmPerson, Person>();
            Mapper.CreateMap<Person, vmPerson>();
            #endregion
        }

        private FCTDataManager _man;
        protected FCTDataManager FCTManager
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
                    _man.Students.Dispose();
                    _man.People.Dispose();
                    //_man.Vendors.Dispose();
                    //_man = null;
                }
                base.Dispose(disposing);
            }
        }

    }
}

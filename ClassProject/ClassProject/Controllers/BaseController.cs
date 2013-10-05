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

            Mapper.CreateMap<vmCourse, Course>();
            Mapper.CreateMap<Course, vmCourse>();


            #endregion
        }

        private PersonManager _pman;
        protected PersonManager PeopleManager
        {
            get
            {
                if (_pman == null)
                {
                    _pman = new PersonManager();
                }
                return _pman;
            }
        }

        private StudentManager _sman;
        protected StudentManager StudManager
        {
            get
            {
                if (_sman == null)
                {
                    _sman = new StudentManager();
                }
                return _sman;
            }
        }

        private DepartmentManager _dman;
        protected DepartmentManager DeptManager
        {
            get
            {
                if (_dman == null)
                {
                    _dman = new DepartmentManager();
                }
                return _dman;
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
                if (_pman != null)
                {
                    _pman.Dispose();
                    _sman.Dispose();
                    _dman.Dispose();
                    _pman = null;
                    _sman = null;
                    _dman = null;
                }
                base.Dispose(disposing);
            }
        }

    }
}

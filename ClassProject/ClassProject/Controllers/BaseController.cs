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

            Mapper.CreateMap<vmCourse, CourseDetail>();
            Mapper.CreateMap<CourseDetail, vmCourse>();

            Mapper.CreateMap<vmInstructor, Instructor>();
            Mapper.CreateMap<Instructor, vmInstructor>();

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

        private InstructorManager _iman;
        protected InstructorManager InstManager
        {
            get
            {
                if (_iman == null)
                {
                    _iman = new InstructorManager();
                }
                return _iman;
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

        private CourseManager _cman;
        protected CourseManager CoursesManager
        {
            get
            {
                if (_cman == null)
                {
                    _cman = new CourseManager();
                }
                return _cman;
            }
        }

        private TextbookManager _tman;
        protected TextbookManager TBManager
        {
            get
            {
                if (_tman == null)
                {
                    _tman = new TextbookManager();
                }
                return _tman;
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
                    _pman = null;
                }
                if (_sman != null)
                {
                    _sman.Dispose();
                    _sman = null;
                }
                if (_sman != null)
                {
                    _iman.Dispose();
                    _iman = null;
                }
                if (_dman != null)
                {
                    _dman.Dispose();
                    _dman = null;
                }
                if (_cman != null)
                {
                    _cman.Dispose();
                    _cman = null;
                }
                if (_tman != null)
                {
                    _tman.Dispose();
                    _tman = null;
                }
                base.Dispose(disposing);
            }
        }

    }
}

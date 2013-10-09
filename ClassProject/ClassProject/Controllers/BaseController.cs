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

            Mapper.CreateMap<vmAuthor, Author>();
            Mapper.CreateMap<Author, vmAuthor>();

            Mapper.CreateMap<vmStudent, Student>();
            Mapper.CreateMap<Student, vmStudent>();

            Mapper.CreateMap<vmPerson, Person>();
            Mapper.CreateMap<Person, vmPerson>();

            Mapper.CreateMap<vmEnrollment, Enrollment>();
            Mapper.CreateMap<Enrollment, vmEnrollment>();

            Mapper.CreateMap<vmSemester, Semester>();
            Mapper.CreateMap<Semester, vmSemester>();

            Mapper.CreateMap<vmCourse, Course>();
            Mapper.CreateMap<Course, vmCourse>();

            Mapper.CreateMap<vmDepartment, Department>();
            Mapper.CreateMap<Department, vmDepartment>();

            Mapper.CreateMap<vmCourse, CourseDetail>();
            Mapper.CreateMap<CourseDetail, vmCourse>();

            Mapper.CreateMap<vmInstructor, Instructor>();
            Mapper.CreateMap<Instructor, vmInstructor>();

            Mapper.CreateMap<vmPublisher, Publisher>();
            Mapper.CreateMap<Publisher, vmPublisher>();

            Mapper.CreateMap<vmTextbook, Textbook>();
            Mapper.CreateMap<Textbook, vmTextbook>();

            #endregion
        }

        #region Managers
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

        private AuthorManager _aman;
        public AuthorManager AuthorsManager
        {
            get
            {
                if (_aman == null)
                {
                    _aman = new AuthorManager();
                }
                return _aman;
            }
        }

        private PublisherManager _pubman;
        public PublisherManager PublishersManager
        {
            get
            {
                if (_pubman == null)
                {
                    _pubman = new PublisherManager();
                }
                return _pubman;
            }
        }

        private EnrollmentManager _eman;
        public EnrollmentManager EnrollmentsManager
        {
            get
            {
                if (_eman == null)
                {
                    _eman = new EnrollmentManager();
                }
                return _eman;
            }
        }

        private SemesterManager _semman;
        public SemesterManager SemestersManager
        {
            get
            {
                if (_semman == null)
                {
                    _semman = new SemesterManager();
                }
                return _semman;
            }
        }
        #endregion

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
                if (_aman != null)
                {
                    _aman.Dispose();
                    _aman = null;
                }

                if (_pubman != null)
                {
                    _pubman.Dispose();
                    _pubman = null;
                }
                if (_eman != null)
                {
                    _eman.Dispose();
                    _eman = null;
                }
                if (_semman != null)
                {
                    _semman.Dispose();
                    _semman = null;
                }
                base.Dispose(disposing);
            }
        }

    }
}

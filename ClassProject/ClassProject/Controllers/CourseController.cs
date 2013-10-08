using ClassProject.Models;
using FCTDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;

namespace ClassProject.Controllers
{
    public class CourseController : BaseController
    {
        //
        // GET: /Course/
        [HttpGet]
        public ActionResult Index()
        {
            var disp = new vmCourseSearch();
            return View(disp);
        }
        [HttpPost]
        public ActionResult Index(vmCourseSearch vm)
        {
            IEnumerable<CourseDetail> courses = null;
            using (CoursesManager)
            {
                courses = CoursesManager.GetAllCourseDetails();
                var dispcourses = Mapper.Map<IEnumerable<vmCourse>>(courses);
                JsonResult result = Json(courses);
                return result;
            }

        }
        //
        // GET: /Course/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Course/Create
        [HttpGet]
        public ActionResult Create()
        {
            var disp = new vmCourse();
            using (DeptManager)
            {
                using(InstManager)
                {
                    using (PeopleManager)
                    {
                        using (TBManager)
                        {
                            disp.Departments = DeptManager.GetAllDepartments().ToList();
                            var inst = InstManager.GetAllInstructors();
                            var people = PeopleManager.FindPeople(p => inst.Select(i => i.PersonID).Contains(p.ID));
                            
                            
                            disp.Textbooks = TBManager.GetAllTextbooks().ToList();
                            return View(disp);
                        }
                    }
                }
            }
        }

        //
        // POST: /Course/Create

        [HttpPost]
        public ActionResult Create(vmCourse course)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Course/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Course/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Course/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Course/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}

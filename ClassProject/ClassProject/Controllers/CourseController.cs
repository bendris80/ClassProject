using ClassProject.Models;
using FCTDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using System.Data;

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
                //var dispcourses = Mapper.Map<IEnumerable<vmCourse>>(courses);
                JsonResult result = Json(courses);
                return result;
            }

        }
        //
        // GET: /Course/Details/5

        public ActionResult Details(int id)
        {
            using (CoursesManager)
            {
                var disp = Mapper.Map<vmCourse>(CoursesManager.GetAllCourseDetails().Where(d => d.ID == id).FirstOrDefault());
                return View(disp);
            }
        }

        //
        // GET: /Course/Create
        [HttpGet]
        public ActionResult Create()
        {
            var disp = new vmCourse();
            using (DeptManager)
            {
                using (InstManager)
                {
                    using (PeopleManager)
                    {
                        using (TBManager)
                        {
                            disp.Departments = DeptManager.GetAllDepartments().ToList();
                            var inst = InstManager.GetAllInstructors();
                            var people = PeopleManager.GetAllPeople();

                            var instr = from instructor in inst
                                        join person in people on instructor.PersonID equals person.ID
                                        select new KeyValuePair<int, string>(instructor.ID, string.Format("{0}, {1}", person.LastName, person.FirstMidName));
                            disp.Instructors = instr.ToDictionary(t => t.Key, t => t.Value);

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
                if (ModelState.IsValid)
                {
                    using (CoursesManager)
                    {
                        var item = Mapper.Map<Course>(course);
                        var success = CoursesManager.AddCourse(item);
                        if (success)
                        {
                            return RedirectToAction("Details", new {id = item.ID});
                        }
                        else
                        {
                            ModelState.AddModelError("", "Unable to save course. Please try again.");
                        }
                    }
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(course);
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

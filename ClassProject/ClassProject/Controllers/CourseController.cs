using ClassProject.Models;
using FCTDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
            using (var cm = new CourseManager())
            {
                var courses = cm.GetAllCourses();

                return Json(courses);
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
                disp.Departments = DeptManager.GetAllDepartments().ToList();
                return View(disp);
            }
        }

        //
        // POST: /Course/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
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

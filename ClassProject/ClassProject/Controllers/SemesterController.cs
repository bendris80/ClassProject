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
    public class SemesterController : BaseController
    {
        //
        // GET: /Semester/
        [HttpGet]
        public ActionResult Index()
        {
            using (SemestersManager)
            {
                var disp = Mapper.Map<IEnumerable<vmSemester>>(SemestersManager.GetAllSemesters());
                return View(disp);
            }
        }

        //
        // GET: /Semester/Details/5
        [HttpGet]
        public ActionResult Details(int id)
        {
            using (SemestersManager)
            {
                var disp = Mapper.Map<vmSemester>(SemestersManager.GetSemesterbyID(id));
                return View(disp);
            }
        }

        //
        // GET: /Semester/Create
        [HttpGet]
        public ActionResult Create()
        {
            var disp = new vmSemester();
            return View(disp);
        }
        //
        // POST: /Semester/Create
        [HttpPost]
        public ActionResult Create(vmSemester sem)
        {

            if (ModelState.IsValid)
            {
                try
                {

                    using (SemestersManager)
                    {
                        var item = Mapper.Map<Semester>(sem);
                        var success = SemestersManager.AddSemester(item);
                        if (success)
                        {
                            return RedirectToAction("Details", new { id = item.ID });
                        }
                    }
                }
                catch
                {
                    ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
                }
            }
            return View(sem);
        }

        //
        // GET: /Semester/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Semester/Edit/5

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
        // GET: /Semester/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Semester/Delete/5

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

﻿using AutoMapper;
using ClassProject.Models;
using FCTDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClassProject.Controllers
{
    public class DepartmentController : BaseController
    {
        //
        // GET: /Department/
        [HttpGet]
        public ActionResult Index()
        {
            using (DeptManager)
            {
                var items = DeptManager.GetAllDepartments().OrderBy(d => d.Name);
                var disp = Mapper.Map<IEnumerable<vmDepartment>>(items);
                return View(disp);
            }
        }

        //
        // GET: /Department/Details/5

        //public ActionResult Details(int id)
        //{
        //    return View();
        //}

        //
        // GET: /Department/Create
        [HttpGet]
        public ActionResult Create()
        {
            var disp = new vmDepartment();
            return View(disp);
        }
        //
        // POST: /Department/Create
        [HttpPost]
        public ActionResult Create(vmDepartment dept)
        {
            if (ModelState.IsValid)
            {
                try
                {

                    using (DeptManager)
                    {
                        var item = Mapper.Map<Department>(dept);
                        var success = DeptManager.AddDepartment(item);
                        if (success)
                        {
                            return RedirectToAction("Index");
                        }
                    }
                }
                catch
                {
                    ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
                }
            }
            return View(dept);
        }

        //
        // GET: /Department/Edit/5
        [HttpGet]
        public ActionResult Edit(int id)
        {
            using (DeptManager)
            {
                var item = DeptManager.GetDepartmentbyID(id);
                var disp = Mapper.Map<vmDepartment>(item);
                return View(disp);
            }
        }
        //
        // POST: /Department/Edit/5
        [HttpPost]
        public ActionResult Edit(vmDepartment dept)
        {
            try
            {
                using (DeptManager)
                {
                    var item = DeptManager.GetDepartmentbyID(dept.ID);
                    item.Name = dept.Name;
                    var success = DeptManager.UpdateDepartment(item);
                    if (success)
                    {
                        return RedirectToAction("Index");
                    }
                }
            }
            catch
            {
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(dept);
        }

        ////
        //// GET: /Department/Delete/5

        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        ////
        //// POST: /Department/Delete/5
        //[HttpPost]
        //public ActionResult Delete(int id, FormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add delete logic here

        //        return RedirectToAction("Index");
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}
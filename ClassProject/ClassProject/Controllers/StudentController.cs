using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClassProject.Models;

using PagedList;

namespace ClassProject.Controllers
{
    public class StudentController : BaseController
    {
        //
        // GET: /Student/
        [HttpGet]
        public ViewResult Index()
        {
            return View();
        }


        //
        // GET: /Student/Details/5
        [HttpGet]
        public ViewResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Student/Create
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Student/Create

        [HttpPost]
        public ActionResult Create(vmStudent student)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    return RedirectToAction("Index");
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(student);
        }

        //
        // GET: /Student/Edit/5
        [HttpGet]
        public ActionResult Edit(int id)
        {
            
            return View();
        }

        //
        // POST: /Student/Edit/5

        [HttpPost]
        public ActionResult Edit(vmStudent student)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    
                    return RedirectToAction("Index");
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(student);
        }

        //
        // GET: /Student/Delete/5
        [HttpGet]
        public ActionResult Delete(int id)
        {
            
            return View();
        }


        //
        // POST: /Student/Delete/5

        [HttpPost]
        public ActionResult DeleteConfirmed(int id)
        {
            try
            {
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)

            }
            return RedirectToAction("Index");
        }
    }
}
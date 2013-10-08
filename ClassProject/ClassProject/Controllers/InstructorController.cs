﻿using AutoMapper;
using ClassProject.Models;
using FCTDataModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClassProject.Controllers
{
    public class InstructorController : BaseController
    {
        //
        // GET: /Instructor/

        public ActionResult Index()
        {
            using (DeptManager)
            {
                using (InstManager)
                {
                    using (PeopleManager)
                    {
                        var items = InstManager.GetAllInstructors();
                        var disp = Mapper.Map<IEnumerable<vmInstructor>>(items);
                        foreach (var d in disp)
                        {
                            d.Person = new vmPerson();
                            d.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(d.PersonID));
                            d.Department = new vmDepartment();
                            d.Department = Mapper.Map<vmDepartment>(DeptManager.GetDepartmentbyID(d.DepartmentID));
                        }
                        return View(disp);
                    }
                }
            }
        }

        //
        // GET: /Instructor/Details/5

        public ActionResult Details(int id)
        {
            using (DeptManager)
            {
                using (InstManager)
                {
                    using (PeopleManager)
                    {
                        var item = InstManager.GetInstructorbyID(id);
                        var disp = Mapper.Map<vmInstructor>(item);
                        disp.Person = new vmPerson();
                        disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(item.PersonID));
                        disp.Department = new vmDepartment();
                        disp.Department = Mapper.Map<vmDepartment>(DeptManager.GetDepartmentbyID(item.DepartmentID));
                        return View(disp);
                    }
                }
            }
        }

        //
        // GET: /Instructor/Create

        public ActionResult Create()
        {
            using (DeptManager)
            {
                var disp = new vmInstructor();
                disp.Person = new vmPerson();
                disp.Departments = new List<Department>();
                disp.Departments = DeptManager.GetAllDepartments().OrderBy(d => d.Name).ToList();
                return View(disp);
            }
        }

        //
        // POST: /Instructor/Create

        [HttpPost]
        public ActionResult Create(vmInstructor inst)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (InstManager)
                    {
                        using (PeopleManager)
                        {
                            var person = Mapper.Map<Person>(inst.Person);
                            var success = PeopleManager.AddPerson(person);
                            if (success)
                            {
                                var item = Mapper.Map<Instructor>(inst);
                                item.PersonID = person.ID;
                                success = InstManager.AddInstructor(item);
                                if (success)
                                {
                                    return RedirectToAction("Details", new { id = item.ID });
                                }
                                else
                                {
                                    ModelState.AddModelError("", "Unable to save Instructor. Please try again.");
                                    return View(inst);
                                }
                            }
                            else
                            {
                                ModelState.AddModelError("", "Unable to save person. Please try again.");
                                return View(inst);
                            }
                        }
                    }
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(inst);
        }

        //
        // GET: /Instructor/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Instructor/Edit/5

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
        // GET: /Instructor/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Instructor/Delete/5

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

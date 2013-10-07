using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using ClassProject.Models;
using FCTDataModel;
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
            using (StudManager)
            {
                using (PeopleManager)
                {
                    var items = StudManager.GetAllStudents();
                    var disp = Mapper.Map<IEnumerable<vmStudent>>(items);
                    foreach (var d in disp)
                    {
                        d.Person = new vmPerson();
                        d.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(d.PersonID));
                    }
                    return View(disp);
                }
            }
        }

        //
        // GET: /Student/Details/5
        [HttpGet]
        public ActionResult Details(int id)
        {
            using (PeopleManager)
            {
                using (StudManager)
                {
                    var item = StudManager.GetStudentbyID(id);
                    if (item != null)
                    {
                        var disp = Mapper.Map<vmStudent>(item);
                        disp.Person = new vmPerson();
                        disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.PersonID));
                        return View(disp);
                    }
                    else
                    {
                        return RedirectToAction("Index");
                    }
                }
            }
        }

        //
        // GET: /Student/Create
        [HttpGet]
        public ActionResult Create()
        {
            var disp = new vmStudent();
            disp.Person = new vmPerson();
            return View(disp);
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
                    using (PeopleManager)
                    {
                        using (StudManager)
                        {
                            var p = Mapper.Map<Person>(student.Person);
                            var success = PeopleManager.AddPerson(p);
                            if (success)
                            {
                                var s = Mapper.Map<Student>(student);
                                s.PersonID = p.ID;
                                success = StudManager.AddStudent(s);
                                if (success)
                                {
                                    return RedirectToAction("Details", new { id = s.ID });
                                }
                                else
                                {
                                    ModelState.AddModelError("", "Unable to save student. Please try again.");
                                    return View(student);
                                }
                            }
                            else
                            {
                                ModelState.AddModelError("", "Unable to save person. Please try again.");
                                return View(student);
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
            return View(student);
        }

        //
        // GET: /Student/Edit/5
        [HttpGet]
        public ActionResult Edit(int id)
        {
            using (PeopleManager)
            {
                using (StudManager)
                {
                    var item = StudManager.GetStudentbyID(id);
                    if (item != null)
                    {
                        var disp = Mapper.Map<vmStudent>(item);
                        disp.Person = new vmPerson();
                        disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.PersonID));
                        return View(disp);
                    }
                    else
                    {
                        return RedirectToAction("Details", new { id = id });
                    }
                }
            }
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
                    using (PeopleManager)
                    {
                        using (StudManager)
                        {
                            var person = PeopleManager.GetPersonbyID(student.PersonID);
                            person.FirstMidName = student.Person.FirstMidName;
                            person.LastName = student.Person.LastName;
                            var success = PeopleManager.UpdatePerson(person);
                            if (success)
                            {
                                var stu = StudManager.GetStudentbyID(student.ID);
                                stu.EnrollmentDate = student.EnrollmentDate;
                                success = StudManager.UpdateStudent(stu);
                                if (success)
                                {
                                    return RedirectToAction("Details", new { id = student.ID });
                                }
                                ModelState.AddModelError("", "Unable to save student. Please try again.");
                                return View(student);
                            }
                            else
                            {
                                ModelState.AddModelError("", "Unable to save person. Please try again.");
                                return View(student);
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
            return View(student);
        }

        //
        // GET: /Student/Delete/5
        [HttpGet]
        public ActionResult Delete(int id)
        {

            using (PeopleManager)
            {
                using (StudManager)
                {
                    var item = StudManager.GetStudentbyID(id);
                    if (item != null)
                    {
                        var disp = Mapper.Map<vmStudent>(item);
                        disp.Person = new vmPerson();
                        disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.PersonID));
                        return View(disp);
                    }
                    else
                    {
                        return RedirectToAction("Details", new { id = id });
                    }
                }
            }
        }
        //
        // POST: /Student/Delete/5
        [HttpPost]
        public ActionResult Delete(vmStudent student)
        {
            try
            {
                using (StudManager)
                {
                    var stu = StudManager.GetStudentbyID(student.ID);
                    var success = StudManager.RemoveStudent(stu);
                    if (success)
                    {
                        return RedirectToAction("Index");
                    }
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to delete student. Try again, and if the problem persists see your system administrator.");
            }
            return View(student);
        }
    }
}
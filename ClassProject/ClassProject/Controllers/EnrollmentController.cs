using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using ClassProject.Models;
using FCTDataModel;

namespace ClassProject.Controllers
{
    public class EnrollmentController : BaseController
    {
        //
        // GET: /Enrollment/
        [HttpGet]
        public ActionResult Index()
        {
            using (EnrollmentsManager)
            {
                using (CoursesManager)
                {
                    using (StudManager)
                    {
                        using (PeopleManager)
                        {
                            using (SemestersManager)
                            {
                                var disp = Mapper.Map<IEnumerable<vmEnrollment>>(EnrollmentsManager.GetAllEnrollments());
                                foreach (var d in disp)
                                {
                                    d.Course = Mapper.Map<vmCourse>(CoursesManager.GetCoursebyID(d.CourseID));
                                    d.Student = Mapper.Map<vmStudent>(StudManager.GetStudentbyID(d.StudentID));
                                    d.Student.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(d.Student.PersonID));
                                    d.Semester = Mapper.Map<vmSemester>(SemestersManager.GetSemesterbyID(d.SemesterID));
                                }
                                return View(disp);
                            }
                        }
                    }
                }
            }
        }

        //
        // GET: /Enrollment/Details/5
        [HttpGet]
        public ActionResult Details(int id)
        {
            using (EnrollmentsManager)
            {
                using (StudManager)
                {
                    using (PeopleManager)
                    {
                        using (CoursesManager)
                        {
                            using (SemestersManager)
                            {
                                var disp = Mapper.Map<vmEnrollment>(EnrollmentsManager.GetEnrollmentbyID(id));
                                disp.Student = Mapper.Map<vmStudent>(StudManager.GetStudentbyID(disp.StudentID));
                                disp.Student.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.Student.PersonID));
                                disp.Course = Mapper.Map<vmCourse>(CoursesManager.GetCoursebyID(disp.CourseID));
                                disp.Semester = Mapper.Map<vmSemester>(SemestersManager.GetSemesterbyID(disp.SemesterID));
                                return View(disp);
                            }
                        }
                    }
                }
            }
        }

        //
        // GET: /Enrollment/Create
        [HttpGet]
        public ActionResult Create()
        {
            using (EnrollmentsManager)
            {
                using (CoursesManager)
                {
                    using (StudManager)
                    {
                        using (PeopleManager)
                        {
                            using (SemestersManager)
                            {
                                var disp = new vmEnrollment();
                                disp.Courses = CoursesManager.GetAllCourses().ToList();
                                disp.Semesters = SemestersManager.GetAllSemesters().ToList();
                                var students = StudManager.GetAllStudents();
                                var people = PeopleManager.GetAllPeople();

                                var studs = from student in students
                                            join person in people on student.PersonID equals person.ID
                                            select new KeyValuePair<int, string>(student.ID, string.Format("{0}, {1}", person.LastName, person.FirstMidName));
                                disp.Students = studs.ToDictionary(t => t.Key, t => t.Value);
                                return View(disp);
                            }
                        }
                    }
                }
            }
        }
        //
        // POST: /Enrollment/Create
        [HttpPost]
        public ActionResult Create(vmEnrollment enroll)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (EnrollmentsManager)
                    {
                        var item = Mapper.Map<Enrollment>(enroll);
                        var success = EnrollmentsManager.AddEnrollment(item);
                        if (success)
                        {
                            return RedirectToAction("Index");
                        }
                        else
                        {
                            ModelState.AddModelError("", "Unable to save enrollment. Please try again.");
                        }
                    }
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(enroll);
        }

        //
        // GET: /Enrollment/Edit/5
        [HttpGet]
        public ActionResult Edit(int id)
        {
            using (EnrollmentsManager)
            {
                using (StudManager)
                {
                    using (PeopleManager)
                    {
                        using (CoursesManager)
                        {
                            using (SemestersManager)
                            {
                                var disp = Mapper.Map<vmEnrollment>(EnrollmentsManager.GetEnrollmentbyID(id));
                                disp.Student = Mapper.Map<vmStudent>(StudManager.GetStudentbyID(disp.StudentID));
                                disp.Student.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.Student.PersonID));
                                disp.Course = Mapper.Map<vmCourse>(CoursesManager.GetCoursebyID(disp.CourseID));
                                disp.Semester = Mapper.Map<vmSemester>(SemestersManager.GetSemesterbyID(disp.SemesterID));
                                return View(disp);
                            }
                        }
                    }
                }
            }
        }

        //
        // POST: /Enrollment/Edit/5
        [HttpPost]
        public ActionResult Edit(vmEnrollment enroll)
        {
            try
            {
                using (EnrollmentsManager)
                {
                    var item = EnrollmentsManager.GetEnrollmentbyID(enroll.ID);
                    item.Grade = enroll.Grade;
                    var success = EnrollmentsManager.UpdateEnrollment(item);
                    if (success)
                    {
                        return RedirectToAction("Index");
                    }
                    throw new DataException();
                }
            }
            catch (DataException)
            {
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
                return View(enroll);
            }
        }

        //
        // GET: /Enrollment/Delete/5
        [HttpGet]
        public ActionResult Delete(int id)
        {
            using (EnrollmentsManager)
            {
                using (StudManager)
                {
                    using (PeopleManager)
                    {
                        using (CoursesManager)
                        {
                            using (SemestersManager)
                            {
                                var disp = Mapper.Map<vmEnrollment>(EnrollmentsManager.GetEnrollmentbyID(id));
                                disp.Student = Mapper.Map<vmStudent>(StudManager.GetStudentbyID(disp.StudentID));
                                disp.Student.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.Student.PersonID));
                                disp.Course = Mapper.Map<vmCourse>(CoursesManager.GetCoursebyID(disp.CourseID));
                                disp.Semester = Mapper.Map<vmSemester>(SemestersManager.GetSemesterbyID(disp.SemesterID));
                                return View(disp);
                            }
                        }
                    }
                }
            }
        }
        //
        // POST: /Enrollment/Delete/5
        [HttpPost]
        public ActionResult Delete(vmEnrollment enroll)
        {
            try
            {
                using (EnrollmentsManager)
                {
                    var item = EnrollmentsManager.GetEnrollmentbyID(enroll.ID);
                    var success = EnrollmentsManager.RemoveEnrollment(item);
                    if (success)
                    {
                        return RedirectToAction("Index");
                    }
                    throw new DataException();
                }
            }
            catch (DataException)
            {
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
                return View(enroll);
            }
        }
    }
}

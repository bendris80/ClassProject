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
					var disp = Mapper.Map<vmStudent>(item);
					if (disp != null)
					{
						disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.PersonID));
					}
					else
					{
						disp = new vmStudent();
						ModelState.AddModelError("", "Failed to load details for requested item.");
					}
					return View(disp);
				}
			}
		}

		//
		// GET: /Student/Create
		[HttpGet]
		public ActionResult Create()
		{
			var disp = new vmStudent();
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
									throw new DataException("Unable to save Student. Please try again.");
								}
							}
							else
							{
								throw new DataException("Unable to save person. Please try again.");
							}
						}
					}
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
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
					var disp = Mapper.Map<vmStudent>(item);
					if (disp != null)
					{
						disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.PersonID));
					}
					else
					{
						disp = new vmStudent();
						ModelState.AddModelError("", "Failed to load details for requested item.");
					}
					return View(disp);
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
								else
								{
									throw new DataException("Unable to save Student. Please try again.");
								}
							}
							else
							{
								throw new DataException("Unable to save person. Please try again.");
							}
						}
					}
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
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
					var disp = Mapper.Map<vmStudent>(item);
					if (disp != null)
					{
						disp.Person = new vmPerson();
						disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.PersonID));
						return View(disp);
					}
					else
					{
						disp = new vmStudent();
						ModelState.AddModelError("", "Failed to load details for requested item.");
					}
					return View(disp);
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
					throw new DataException("Enable to delete intructor " + student.Person.FullName + ". Please try again.");
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
			}
			return View(student);
		}
	}
}
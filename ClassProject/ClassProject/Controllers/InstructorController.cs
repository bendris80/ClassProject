using AutoMapper;
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
		[HttpGet]
		public ActionResult Index()
		{
			using (PeopleManager)
			{
				using (InstManager)
				{
					using (DeptManager)
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
		[HttpGet]
		public ActionResult Details(int id)
		{
			using (DeptManager)
			{
				using (InstManager)
				{
					using (PeopleManager)
					{
						using (TBManager)
						{
							var item = InstManager.GetInstructorbyID(id);
							var disp = Mapper.Map<vmInstructor>(item);
							disp.Person = new vmPerson();
							disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(item.PersonID));
							disp.Department = new vmDepartment();
							disp.Department = Mapper.Map<vmDepartment>(DeptManager.GetDepartmentbyID(item.DepartmentID));
							disp.Textbooks = TBManager.GetAllTextbooks().ToList();
							var books = InstManager.FindInstructorBooks(i => i.InstructorID == id).Select(i => i.TextBookID);
							foreach (var b in books)
							{
								var t = TBManager.GetTextbookbyID(b);
								if (t != null)
								{
									disp.InstructorTextbooks.Add(Mapper.Map<vmTextbook>(t));
								}
							}
							return View(disp);
						}
					}
				}
			}
		}

		[HttpPost]
		public ActionResult CheckOut(FormCollection c)
		{
			using (InstManager)
			{
				var item = new InstructorBook();
				item.InstructorID = Convert.ToInt32(c[0]);
				item.TextBookID = Convert.ToInt32(c[1]);
				var success = InstManager.AddInstructorBook(item);
				if (!success)
				{
					ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
				}
				return RedirectToAction("Details", new { id = item.InstructorID });
			}
		}

		[HttpPost]
		public ActionResult CheckIn(FormCollection c)
		{
			using (InstManager)
			{
				var item = InstManager.FindInstructorBooks(b => b.InstructorID == Convert.ToInt32(c[0]) && b.TextBookID == Convert.ToInt32(c[1])).FirstOrDefault();
				if (item != null)
				{
					var success = InstManager.RemoveInstructorBook(item);
					if (!success)
					{
						ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
					}
				}
                return RedirectToAction("Details", new { id = Convert.ToInt32(c[0]) });
			}
		}

		//
		// GET: /Instructor/Create
		[HttpGet]
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
		[HttpGet]
		public ActionResult Edit(int id)
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
						disp.Departments = new List<Department>();
						disp.Departments = DeptManager.GetAllDepartments().OrderBy(d => d.Name).ToList();
						return View(disp);
					}
				}
			}
		}
		//
		// POST: /Instructor/Edit/5
		[HttpPost]
		public ActionResult Edit(vmInstructor inst)
		{
			try
			{
				if (ModelState.IsValid)
				{
					using (InstManager)
					{
						using (PeopleManager)
						{
							var person = PeopleManager.GetPersonbyID(inst.PersonID);
							person.FirstMidName = inst.Person.FirstMidName;
							person.LastName = inst.Person.LastName;
							var success = PeopleManager.UpdatePerson(person);
							if (success)
							{
								var item = InstManager.GetInstructorbyID(inst.ID);
								item.PersonID = person.ID;
								item.HireDate = inst.HireDate;
								item.DepartmentID = inst.DepartmentID;
								success = InstManager.UpdateInstructor(item);
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
		// GET: /Instructor/Delete/5

		public ActionResult Delete(int id)
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
		// POST: /Instructor/Delete/5

		[HttpPost]
		public ActionResult Delete(vmInstructor inst)
		{
			try
			{
				using (InstManager)
				{
					var item = InstManager.GetInstructorbyID(inst.ID);
					var success = InstManager.RemoveInstructor(item);
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
				return View(inst);
			}
		}
	}
}

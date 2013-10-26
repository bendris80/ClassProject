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
							if (disp != null)
							{					
								disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(item.PersonID));
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
							}
							else
							{
								disp = new vmInstructor();
								ModelState.AddModelError("", "Failed to load details for requested item.");
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
					ModelState.AddModelError("", "Unable to checkout textbook. Please try again.");
				}
				return RedirectToAction("Details", new { id = item.InstructorID });
			}
		}

		[HttpPost]
		public ActionResult CheckIn(FormCollection c)
		{
			using (InstManager)
			{
				var item = InstManager.FindInstructorBooks(b => b.InstructorID == Convert.ToInt32(c[1]) && b.TextBookID == Convert.ToInt32(c[0])).FirstOrDefault();
				if (item != null)
				{
					var success = InstManager.RemoveInstructorBook(item);
					if (!success)
					{
						ModelState.AddModelError("", "Unable to check in textbook. Try again.");
					}
				}
				return RedirectToAction("Details", new { id = Convert.ToInt32(c[1]) });
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
									throw new DataException("Unable to save Instructor. Please try again.");
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
			using (DeptManager)
			{
				inst.Departments = DeptManager.GetAllDepartments().OrderBy(d => d.Name).ToList();
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
						if (disp != null)
						{
							disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(item.PersonID));
							disp.Departments = DeptManager.GetAllDepartments().OrderBy(d => d.Name).ToList();
						}
						else
						{
							disp = new vmInstructor();
							ModelState.AddModelError("", "Failed to load details fo requested item.");
						}
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
									throw new DataException("Unable to save Instructor. Please try again.");
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
			using (DeptManager)
			{
				inst.Departments = DeptManager.GetAllDepartments().OrderBy(d => d.Name).ToList();
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
						if (disp != null)
						{
							disp.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(item.PersonID));
							disp.Department = Mapper.Map<vmDepartment>(DeptManager.GetDepartmentbyID(item.DepartmentID));
						}
						else
						{
							disp = new vmInstructor();
							ModelState.AddModelError("", "Failed to load details for requested object");
						}
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
					throw new DataException("Enable to delete intructor " + inst.Person.FullName + ". Please try again.");
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
			}
			return View(inst);
		}
	}
}

using ClassProject.Models;
using FCTDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using System.Data;

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
			IEnumerable<CourseDetail> courses = null;
			using (CoursesManager)
			{
				courses = CoursesManager.GetAllCourseDetails();
				//var dispcourses = Mapper.Map<IEnumerable<vmCourse>>(courses);
				JsonResult result = Json(courses.ToList());
				return result;
			}

		}

		//
		// GET: /Course/Details/5
		public ActionResult Details(int id)
		{
			using (CoursesManager)
			{
				var disp = Mapper.Map<vmCourse>(CoursesManager.GetAllCourseDetails().Where(d => d.ID == id).FirstOrDefault());
				if (disp == null)
				{
					disp = new vmCourse();
					ModelState.AddModelError("", "Failed to load details for requested object");
				}
				return View(disp);
			}
		}

		//
		// GET: /Course/Create
		[HttpGet]
		public ActionResult Create()
		{
			var disp = new vmCourse();
			using (DeptManager)
			{
				using (InstManager)
				{
					using (PeopleManager)
					{
						using (TBManager)
						{
							disp.Departments = DeptManager.GetAllDepartments().ToList();
							var inst = InstManager.GetAllInstructors();
							var people = PeopleManager.GetAllPeople();

							var instr = from instructor in inst
										join person in people on instructor.PersonID equals person.ID
										select new KeyValuePair<int, string>(instructor.ID, string.Format("{0}, {1}", person.LastName, person.FirstMidName));
							disp.Instructors = instr.ToDictionary(t => t.Key, t => t.Value);
							disp.Textbooks = TBManager.GetAllTextbooks().ToList();
							return View(disp);
						}
					}
				}
			}
		}
		//
		// POST: /Course/Create
		[HttpPost]
		public ActionResult Create(vmCourse course)
		{
			try
			{
				if (ModelState.IsValid)
				{
					using (CoursesManager)
					{
						var item = Mapper.Map<Course>(course);
						var success = CoursesManager.AddCourse(item);
						if (success)
						{
							return RedirectToAction("Details", new { id = item.ID });
						}
						throw new DataException("Unable to save course " + course.Title + ". Please try again.");
					}
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
			}
			using (DeptManager)
			{
				using (InstManager)
				{
					using (PeopleManager)
					{
						using (TBManager)
						{
							course.Departments = DeptManager.GetAllDepartments().ToList();
							var inst = InstManager.GetAllInstructors();
							var people = PeopleManager.GetAllPeople();

							var instr = from instructor in inst
										join person in people on instructor.PersonID equals person.ID
										select new KeyValuePair<int, string>(instructor.ID, string.Format("{0}, {1}", person.LastName, person.FirstMidName));
							course.Instructors = instr.ToDictionary(t => t.Key, t => t.Value);
							course.Textbooks = TBManager.GetAllTextbooks().ToList();
						}
					}
				}
			}
			return View(course);
		}

		//
		// GET: /Course/Edit/5
		[HttpGet]
		public ActionResult Edit(int id)
		{
			using (DeptManager)
			{
				using (InstManager)
				{
					using (PeopleManager)
					{
						using (TBManager)
						{
							using (CoursesManager)
							{
								var disp = Mapper.Map<vmCourse>(CoursesManager.GetCoursebyID(id));
								if (disp != null)
								{
									disp.Departments = DeptManager.GetAllDepartments().ToList();
									var inst = InstManager.GetAllInstructors();
									var people = PeopleManager.GetAllPeople();

									var instr = from instructor in inst
												join person in people on instructor.PersonID equals person.ID
												select new KeyValuePair<int, string>(instructor.ID, string.Format("{0}, {1}", person.LastName, person.FirstMidName));
									disp.Instructors = instr.ToDictionary(t => t.Key, t => t.Value);

									disp.Textbooks = TBManager.GetAllTextbooks().ToList();
								}
								else
								{
									disp = new vmCourse();
									ModelState.AddModelError("", "Failed to load details for requested object");
								}
								return View(disp);
							}
						}
					}
				}
			}
		}
		//
		// POST: /Course/Edit/5
		[HttpPost]
		public ActionResult Edit(vmCourse course)
		{
			try
			{
				if (ModelState.IsValid)
				{
					using (CoursesManager)
					{
						var item = CoursesManager.GetCoursebyID(course.ID);
						item.Credits = course.Credits;
						item.DepartmentID = course.DepartmentID;
						item.Description = course.Description;
						item.InstructorID = course.InstructorID;
						item.TextBookID = course.TextBookID;
						item.Title = course.Title;
						var success = CoursesManager.UpdateCourse(item);
						if (success)
						{
							return RedirectToAction("Details", new { id = item.ID });
						}
						throw new DataException("Failed to save " + course.Title + ". Please try again");
					}
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
			}
			using (DeptManager)
			{
				using (InstManager)
				{
					using (PeopleManager)
					{
						using (TBManager)
						{
							course.Departments = DeptManager.GetAllDepartments().ToList();
							var inst = InstManager.GetAllInstructors();
							var people = PeopleManager.GetAllPeople();

							var instr = from instructor in inst
										join person in people on instructor.PersonID equals person.ID
										select new KeyValuePair<int, string>(instructor.ID, string.Format("{0}, {1}", person.LastName, person.FirstMidName));
							course.Instructors = instr.ToDictionary(t => t.Key, t => t.Value);
							course.Textbooks = TBManager.GetAllTextbooks().ToList();
						}
					}
				}
			}
			return View(course);
		}

		//
		// GET: /Course/Delete/5
		public ActionResult Delete(int id)
		{
			using (CoursesManager)
			{
				var disp = Mapper.Map<vmCourse>(CoursesManager.GetAllCourseDetails().Where(d => d.ID == id).FirstOrDefault());
				return View(disp);
			}
		}
		//
		// POST: /Course/Delete/5
		[HttpPost]
		public ActionResult Delete(vmCourse course)
		{
			try
			{
				using (CoursesManager)
				{
					var item = CoursesManager.GetCoursebyID(course.ID);
					var success = CoursesManager.RemoveCourse(item);
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
				return View(course);
			}
		}
	}
}

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
				if (disp == null)
				{
					disp = new vmSemester();
					ModelState.AddModelError("", "Failed to load details for requested item.");
				}
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
			try
			{
				if (ModelState.IsValid)
				{
					using (SemestersManager)
					{
						var item = Mapper.Map<Semester>(sem);
						var success = SemestersManager.AddSemester(item);
						if (success)
						{
							return RedirectToAction("Details", new { id = item.ID });
						}
						throw new DataException("Unable to save Semester. Please try again.");
					}
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
			}
			return View(sem);
		}
	}
}

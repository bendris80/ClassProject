using AutoMapper;
using ClassProject.Models;
using FCTDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;

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
			try
			{
				if (ModelState.IsValid)
				{
					using (DeptManager)
					{
						var item = Mapper.Map<Department>(dept);
						var success = DeptManager.AddDepartment(item);
						if (success)
						{
							return RedirectToAction("Index");
						}
						throw new DataException("Failed to save " + dept.Name + " Department. Please try again.");
					}
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
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
				var disp = Mapper.Map<vmDepartment>(DeptManager.GetDepartmentbyID(id));
				if (disp == null)
				{
					disp = new vmDepartment();
					ModelState.AddModelError("", "Failed to load details for requested object");
				}
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
					throw new DataException("Failed to save " + dept.Name + ". Please try again");
				}
			}
			catch (DataException ex)
			{
				ModelState.AddModelError("", ex.Message);
			}
			return View(dept);
		}
	}
}

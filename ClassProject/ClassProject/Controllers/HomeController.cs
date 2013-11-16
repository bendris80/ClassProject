using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClassProject.Models;


namespace ClassProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to Book Trace";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}

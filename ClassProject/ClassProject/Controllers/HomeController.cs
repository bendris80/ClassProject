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
            ViewBag.Message = "Welcome to Fountainhead College of Technology Data Portal";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}

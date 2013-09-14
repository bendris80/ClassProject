using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ClassProject.DAL;
using ClassProject.Models;
using ClassProject.ViewModels;

namespace ClassProject.Controllers
{
    public class HomeController : Controller
    {
        private SchoolContext db = new SchoolContext();

        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to Contoso University!";

            return View();
        }

        public ActionResult About()
        {
            //var data = from student in db.Students
            //           group student by student.EnrollmentDate into dateGroup
            //           select new EnrollmentDateGroup()
            //           {
            //               EnrollmentDate = dateGroup.Key,
            //               StudentCount = dateGroup.Count()
            //           };
            var query = "SELECT EnrollmentDate, COUNT(*) AS StudentCount "
                + "FROM Person "
                + "WHERE EnrollmentDate IS NOT NULL "
                + "GROUP BY EnrollmentDate";
            var data = db.Database.SqlQuery<EnrollmentDateGroup>(query);
            return View(data);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }

    }
}

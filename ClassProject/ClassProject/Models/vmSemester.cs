using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ClassProject.Models
{
    public class vmSemester
    {
       
        public int ID { get; set; }
        [Display(Name="Name")]
        public string Name { get; set; }
        [Display(Name = "Start Date")]
        public DateTime StartDate { get; set; }
        [Display(Name = "End Date")]
        public DateTime EndDate { get; set; }
    }
}
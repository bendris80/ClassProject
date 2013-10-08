using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmDepartment
    {      
        public int ID { get; set; }
        [Display(Name="Department Name"), Required(ErrorMessage="Name Required")]
        public string Name { get; set; }
    }
}
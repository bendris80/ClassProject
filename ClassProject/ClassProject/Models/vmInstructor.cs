using FCTDataModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmInstructor
    {
        [DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "Hire date is required.")]
        [Display(Name = "Hire Date")]
        public DateTime HireDate { get; set; }

        public int ID { get; set; }

        public int PersonID { get; set; }
        //[Display(Name = "Name"), Required]
        //public string PersonName { get; set; }

        public int DepartmentID { get; set; }
        //[Display(Name = "Department")]
        //public string DepartmentName { get; set; }
        //public List<Department> Departments = new List<Department>();
    }
}
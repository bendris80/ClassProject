using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class Instructor
    {
        [DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "Hire date is required.")]
        [Display(Name = "Hire Date")]
        public DateTime? HireDate { get; set; }
    }
}
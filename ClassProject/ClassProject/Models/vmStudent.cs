using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmStudent
    {

        public int ID { get; set; }

        public int PersonID { get; set; }
        [Display(Name = "Name"), Required]
        public string PersonName { get; set; }

        [Display(Name = "Enrollment Date"),
        Required(ErrorMessage = "Enrollment date is required."),
        DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]
        public DateTime? EnrollmentDate { get; set; }
    }
}
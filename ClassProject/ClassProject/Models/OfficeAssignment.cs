using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    /// <summary>
    /// I dont see a need to use this particular class.
    /// Reuse for another object.
    /// </summary>
    public class OfficeAssignment
    {
        [Key]
        public int PersonID { get; set; }

        [MaxLength(50)]
        [Display(Name = "Office Location")]
        public string Location { get; set; }

        public virtual Instructor Instructor { get; set; }
    }
}


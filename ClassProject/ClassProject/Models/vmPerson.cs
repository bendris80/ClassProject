using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmPerson
    {
        
        public int PersonID { get; set; }

        [Required(ErrorMessage = "Last name is required."),
        Display(Name = "Last Name"),
        MaxLength(50)]
        public string LastName { get; set; }

        [Required(ErrorMessage = "First name is required."),
        Display(Name = "First Name"),
        MaxLength(50)]
        public string FirstMidName { get; set; }

        public string FullName
        {
            get
            {
                return LastName + ", " + FirstMidName;
            }
        }
    }
}
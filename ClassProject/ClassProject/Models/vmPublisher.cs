using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmPublisher
    {
        public int ID { get; set; }
        [Display(Name="Publisher Name"), Required]
        public string Name { get; set; }
        [Display(Name="City")]
        public string City { get; set; }
        [Display(Name="State"), Required]
        public string State { get; set; }
    }
}
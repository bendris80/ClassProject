using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmTextbook
    {
		public vmTextbook()
		{
			Publisher = new vmPublisher();
			Author = new vmAuthor();
		}
        public int ID { get; set; }
        [Display(Name = "Name")]
        public string Name { get; set; }

		[Display(Name="ISBN Number"), Required]
		public string ISBNNumber { get; set; }

		[Display(Name = "Price"), DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:C}")]
		public decimal Price { get; set; }

        public int PublisherID { get; set; }     
        public vmPublisher Publisher { get; set; }

        public int AuthorID { get; set; }
        public vmAuthor Author { get; set; }

        [Display(Name="Year Published"),
        Required(ErrorMessage = "Publish date is required."),
        DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]
        public DateTime PublishDate { get; set; }
    }
}
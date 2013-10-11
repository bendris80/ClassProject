using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace ClassProject.Models
{
    public class vmAuthor
    {
		public vmAuthor()
		{
			Person = new vmPerson();
		}

        public int ID { get; set; }

        public int PersonID { get; set; }

        public vmPerson Person { get; set; }
    }
}
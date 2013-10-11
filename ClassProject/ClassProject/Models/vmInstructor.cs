using FCTDataModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmInstructor
    {
		public vmInstructor()
		{
			Person = new vmPerson();
			Department = new vmDepartment();
			Departments = new List<Department>();
			Textbook = new vmTextbook();
			Textbooks = new List<Textbook>();
			InstructorTextbooks = new List<vmTextbook>();
		}

        [DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]
        [Required(ErrorMessage = "Hire date is required.")]
        [Display(Name = "Hire Date")]
        public DateTime HireDate { get; set; }

        public int ID { get; set; }

        public int PersonID { get; set; }
        public vmPerson Person { get; set; }

        public int DepartmentID { get; set; }
        public vmDepartment Department { get; set; }
        public List<Department> Departments { get; set; }

		public vmTextbook Textbook { get; set; }
		public List<Textbook> Textbooks { get; set; }
		public List<vmTextbook> InstructorTextbooks { get; set; }
    }
}
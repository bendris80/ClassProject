using FCTDataModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmCourse
    {
		public vmCourse()
		{
			Instructors = new Dictionary<int, string>();
			Departments = new List<Department>();
			Textbooks = new List<Textbook>();
		}
        public int ID { get; set; }

        [Display(Name="Course Title"), MaxLength(50), Required(ErrorMessage = "Title is required.")]
        public string Title { get; set; }

        [Display(Name="Course Credits"), Range(0, 5, ErrorMessage = "Number of credits must be between 0 and 5."), Required(ErrorMessage = "Number of credits is required.")]
        public int Credits { get; set; }

        public int InstructorID { get; set; }

        public string InstructorLast { get; set; }
        public string InstructorFirst { get; set; }
        [Display(Name = "Instructor")]
        public string InstructorName { get; set; }


		public Dictionary<int, string> Instructors;

        public int DepartmentID { get; set; }

        [Display(Name = "Department")]
        public string DepartmentName { get; set; }


        public List<Department> Departments;
        
        public int TextBookID { get; set; }
        [Display(Name = "Course TextBook")]
        public string TextBookName { get; set; }
        public List<Textbook> Textbooks;

        [Display(Name="Course Description"), DataType(DataType.MultilineText)]
        public string Description { get; set; }
    }

    public class vmCourseSearch
    {
        public vmCourseSearch()
        {
            SearchText = "";
            Departments = new List<Department>();
            Instructors = new Dictionary<int, string>();
        }
        public string SearchText { get; set; }
        public int SelectedDept { get; set; }
        public List<Department> Departments { get; set; }
        public int SelectedInst { get; set; }
        public Dictionary<int, string> Instructors { get; set; }
    }

}
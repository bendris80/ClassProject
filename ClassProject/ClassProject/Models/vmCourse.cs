using FCTDataModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClassProject.Models
{
    public class vmCourse
    {
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


        public Dictionary<int, string> Instructors = new Dictionary<int, string>();

        public int DepartmentID { get; set; }

        [Display(Name = "Department")]
        public string DepartmentName { get; set; }


        public List<Department> Departments = new List<Department>();
        
        public int TextBookID { get; set; }
        [Display(Name = "Course TextBook")]
        public string TextBookName { get; set; }
        public List<Textbook> Textbooks = new List<Textbook>();

        [Display(Name="Course Description")]
        public string Description { get; set; }
    }

    public class vmCourseSearch
    {
        
    }

}
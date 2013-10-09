using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using FCTDataModel;

namespace ClassProject.Models
{
    public class vmEnrollment
    {
        public int ID { get; set; }
        [Required]
        public int CourseID { get; set; }
        [Required]
        public int StudentID { get; set; }
        [Required]
        public int SemesterID { get; set; }

        [Display(Name="Grade Point Average"), DisplayFormat(DataFormatString = "{0:#.#}", ApplyFormatInEditMode = true)]
        public decimal Grade { get; set; }

        public vmCourse Course { get; set; }
        public vmStudent Student { get; set; }
        public vmSemester Semester { get; set; }

        public List<Semester> Semesters { get; set; }
        public List<Course> Courses { get; set; }
        public Dictionary<int,string> Students { get; set; }
    }
}
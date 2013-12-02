using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FCTDataModel
{
    [Table("vwCourseDetail")]
    public class CourseDetail
    {
        [Column("id"), Key]
        public int ID { get; set; }
        [Column("title")]
        public string Title { get; set; }
        [Column("description")]
        public string Description { get; set; }
        [Column("credits")]
        public int Credits { get; set; }
		[Column("instructor_id")]
		public int InstructorID { get; set; }
        [Column("last_name")]
        public string InstructorLast { get; set; }
        [Column("first_name")]
        public string InstructorFirst { get; set; }
		[Column("dept_id")]
		public int DepartmentID { get; set; }
        [Column("department")]
        public string DepartmentName { get; set; }
		[Column("textbook_id")]
		public int TextBookID { get; set; }
        [Column("textbook")]
        public string TextBookName { get; set; }

        public string InstructorName
        {
            get
            {
                return InstructorLast + ", " + InstructorFirst;
            }
        }
    }
}

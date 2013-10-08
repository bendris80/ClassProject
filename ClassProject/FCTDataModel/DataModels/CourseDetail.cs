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
        [Column("credits")]
        public int Credits { get; set; }
        [Column("last_name")]
        public int InstructorLast { get; set; }
        [Column("first_name")]
        public int InstructorFirst { get; set; }
        [Column("department")]
        public int DepartmentName { get; set; }
        [Column("textbook")]
        public int TextBookName { get; set; }
    }
}

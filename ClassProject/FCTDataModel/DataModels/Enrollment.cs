using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    [Table("enrollment")]
    public class Enrollment
    {
        [Column("id")]
        public int ID { get; set; }
        [Column("semester_id")]
        public int SemesterID { get; set; }
        [Column("course_id")]
        public int CourseID { get; set; }
        [Column("student_id")]
        public int StudentID { get; set; }
        [Column("grade")]
        public decimal Grade { get; set; }
    }
}

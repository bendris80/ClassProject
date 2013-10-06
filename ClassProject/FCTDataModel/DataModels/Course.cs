using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FCTDataModel
{
    /// <summary>
    /// Represents a Course Entry
    /// </summary>
    [Table("course")]
    public class Course
    {
        /// <summary>
        /// Primary Key and Identity
        /// </summary>
        [Column("id"), Key]
        public int ID { get; set; }
        [Column("title")]
        public string Title { get; set; }
        [Column("credits")]
        public int Credits { get; set; }
        [Column("instructor_id")]
        public int InstructorID { get; set; }
        [Column("dept_id")]
        public int DepartmentID { get; set; }
        [Column("textbook_id")]
        public int TextBookID { get; set; }
        [Column("description")]
        public string Description { get; set; }
    }
}

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
        [Column("course_id")]
        public int CourseID { get; set; }
        [Column("person_id")]
        public int PersonID { get; set; }
        [Column("grade")]
        public decimal? Grade { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel.DataModels
{
    [Table("semester")]
    public class Semester
    {
        [Column("id"), Key]
        public int ID { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("start_date")]
        public DateTime StartDate { get; set; }
        [Column("end_date")]
        public DateTime EndDate { get; set; }
    }
}

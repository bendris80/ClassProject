using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace FCTDataModel
{
    [Table("publisher")]
    public class Publisher
    {
        [Column("id"), Key]
        public int ID { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("city")]
        public string City { get; set; }
        [Column("state")]
        public string State { get; set; }
    }
}

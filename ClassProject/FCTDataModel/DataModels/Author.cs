using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    [Table("author")]
    public class Author
    {
        [Column("id"), Key]
        public int ID { get; set; }
        [Column("person_id")]
        public int PersonID { get; set; }
    }
}

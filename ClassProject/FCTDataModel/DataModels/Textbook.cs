using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    [Table("textbook")]
    public class Textbook
    {
        [Column("id"), Key]
        public int ID { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("publisher_id")]
        public int PublisherID { get; set; }
        [Column("author_id")]
        public int AuthorID { get; set; }
        [Column("publish_date")]
        public DateTime PublishDate { get; set; }
    }
}

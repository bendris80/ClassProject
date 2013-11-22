using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
	[Table("vwTextbookDetail")]
	public class TextbookDetail
	{
		[Column("id"), Key]
		public int ID { get; set; }
		[Column("isbn_num")]
		public string ISBNNumber { get; set; }
		[Column("name")]
		public string Name { get; set; }
		[Column("price")]
		public decimal Price { get; set; }
		[Column("publisher")]
		public string Publisher { get; set; }
		[Column("author_name")]
		public string AuthorName { get; set; }
	}
}

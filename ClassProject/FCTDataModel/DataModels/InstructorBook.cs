
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FCTDataModel
{
	[Table("instructor_books")]
	public class InstructorBook
	{
		[Column("id"), Key]
		public int ID { get; set; }
		[Column("instructor_id")]
		public int InstructorID { get; set; }
		[Column("textbook_id")]
		public int TextBookID { get; set; }
	}
}

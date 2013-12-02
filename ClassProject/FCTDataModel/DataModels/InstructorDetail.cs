using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FCTDataModel
{
	[Table("vwInstructorDetail")]
	public class InstructorDetail
	{
		[Column("id"), Key]
		public int ID { get; set; }
		[Column("dept_id")]
		public int DepartmentID { get; set; }
		[Column("hire_date")]
		public DateTime HireDate { get; set; }
		[Column("last_name")]
		public string LastName { get; set; }
		[Column("first_name")]
		public string FirstMidName { get; set; }
		[Column("name")]
		public string DepartmentName { get; set; }

		public string FullName
		{
			get { return LastName + ", " + FirstMidName; }
		}
	}
}

﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FCTDataModel
{
    [Table("department")]
    public class Department
    {
        [Column("id"), Key]
        public int ID { get; set; }
        [Column("name")]
        public string Name { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace FCTDataModel
{
    [Table("tracking_log")]
    public class LogEntry
    {
        [Key, Column("log_event_id"), DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string userid { get; set; }
        [Column("timestamp")]
        public DateTime datetimestamp { get; set; }
        [Column("object")]
        public string object_name { get; set; }
        public string action { get; set; }

        [Column("data1")]
        public string key1value { get; set; }
        [Column("data2")]
        public string key2value { get; set; }
        [Column("data3")]
        public string key3value { get; set; }

        public LogEntry()
        {
            datetimestamp = DateTime.Now;

            object_name = "";
            action = "";

            key1value = "";
            key2value = "";
            key3value = "";
        }

        public LogEntry(DbEntityEntry e, string _userid, IEnumerable<KeyValuePair<string, object>> keys = null)
            : this()
        {
            userid = trimToLength(_userid, 64);
            action = trimToLength(e.State.ToString());
            object_name = trimToLength(e.Entity.GetType().ToString());

            SetKeyValues(keys);
        }

        private static string trimToLength(string s, int maxLength = 50)
        {
            //max len is 50            
            if (!string.IsNullOrEmpty(s) && s.Length > maxLength)
            {
                s = s.Substring(0, maxLength);
            }
            return s;
        }

        public bool SetKeyValues(IEnumerable<KeyValuePair<string, object>> keys)
        {
            if (keys == null) return true;

            if (keys.Count() > 0)
            {
                var k = keys.First();
                key1value = trimToLength((k.Value ?? "").ToString());
            }

            if (keys.Count() > 1)
            {
                var k = keys.Skip(1).Take(1).First();
                key2value = trimToLength((k.Value ?? "").ToString());
            }

            if (keys.Count() > 2)
            {
                var k = keys.Skip(2).Take(2).First();
                key3value = trimToLength((k.Value ?? "").ToString());
            }

            return true;
        }
    }
}

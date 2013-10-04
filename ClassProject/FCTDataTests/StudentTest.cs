using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FCTDataModel;

namespace FCTDataTests
{
    [TestClass]
    public class StudentTest
    {
        [TestMethod]
        public void Create()
        {
            using (var sm = new StudentManager())
            {
                Student s = new Student();
                
            }
        }
        [TestMethod]
        public void Load()
        {
        }
        [TestMethod]
        public void Edit()
        {
        }
        [TestMethod]
        public void Delete()
        {
        }
    }
}

using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FCTDataModel;
using System.Linq;

namespace FCTDataTests
{
    [TestClass]
    public class PersonTest
    {
        [TestMethod]
        public void Create()
        {
            using (var pm = new PersonManager())
            {
                Person p = new Person();
                p.LastName = "Payne";
                p.FirstMidName = "Roger";
                var success = pm.AddPerson(p);
                Assert.IsTrue(success);
            }
        }
        [TestMethod]
        public void Load()
        {
            using (var pm = new PersonManager())
            {
                var item = pm.GetAllPeople().ToList();
                Assert.IsNotNull(item);
            }
        }
        [TestMethod]
        public void Edit()
        {
            using (var pm = new PersonManager())
            {
                Person p = new Person();
                p.LastName = "Smith";
                p.FirstMidName = "John";
                var success = pm.AddPerson(p);
                Assert.IsTrue(success);
                var p2 = pm.FindPeople(pp => pp.LastName == "Smith").FirstOrDefault();
                Assert.IsNotNull(p2);
                p2.FirstMidName = "James";
                success = pm.UpdatePerson(p2);
                Assert.IsTrue(success);
            }
        }
        [TestMethod]
        public void Delete()
        {
            using (var pm = new PersonManager())
            {
                var p2 = pm.FindPeople(pp => pp.LastName == "Smith").FirstOrDefault();
                Assert.IsNotNull(p2);
                var success = pm.RemovePerson(p2);
                Assert.IsTrue(success);
            }
        }
    }
}

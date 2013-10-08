using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using ClassProject.Models;
using FCTDataModel;

namespace ClassProject.Controllers
{
    public class TextbookController : BaseController
    {
        //
        // GET: /Textbook/
        [HttpGet]
        public ActionResult Index()
        {
            using (TBManager)
            {
                using (PublishersManager)
                {
                    using (AuthorsManager)
                    {
                        using (PeopleManager)
                        {
                            var items = TBManager.GetAllTextbooks();
                            var disp = Mapper.Map<IEnumerable<vmTextbook>>(items);
                            foreach (var d in disp)
                            {
                                d.Author = new vmAuthor();
                                d.Author = Mapper.Map<vmAuthor>(AuthorsManager.GetAuthorbyID(d.AuthorID));
                                d.Author.Person = new vmPerson();
                                d.Author.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(d.Author.PersonID));
                                d.Publisher = new vmPublisher();
                                d.Publisher = Mapper.Map<vmPublisher>(PublishersManager.GetPublisherbyID(d.PublisherID));
                            }
                            return View(disp);
                        }
                    }
                }
            }
        }

        //
        // GET: /Textbook/Details/5

        public ActionResult Details(int id)
        {
            using (InstManager)
            {
                using (PublishersManager)
                {
                    using (AuthorsManager)
                    {
                        using (PeopleManager)
                        {
                            var tb = TBManager.GetTextbookbyID(id);
                            var disp = Mapper.Map<vmTextbook>(tb);
                            disp.Publisher = Mapper.Map<vmPublisher>(PublishersManager.GetPublisherbyID(tb.PublisherID));
                            disp.Author = Mapper.Map<vmAuthor>(AuthorsManager.GetAuthorbyID(tb.AuthorID));
                            disp.Author.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.Author.PersonID));
                            return View(disp);
                        }
                    }
                }
            }
        }

        //
        // GET: /Textbook/Create
        [HttpGet]
        public ActionResult Create()
        {
            var disp = new vmTextbook();
            disp.Publisher = new vmPublisher();
            disp.Author = new vmAuthor();
            disp.Author.Person = new vmPerson();
            return View(disp);
        }
        //
        // POST: /Textbook/Create
        [HttpPost]
        public ActionResult Create(vmTextbook tb)
        {
            try
            {
                using (InstManager)
                {
                    using (PublishersManager)
                    {
                        using (AuthorsManager) 
                        {
                            using (PeopleManager)
                            {
                                var person = Mapper.Map<Person>(tb.Author.Person);
                                var success = PeopleManager.AddPerson(person);
                                if (success)
                                {
                                    var author = Mapper.Map<Author>(tb.Author);
                                    author.PersonID = person.ID;
                                    success = AuthorsManager.AddAuthor(author);
                                    if (success)
                                    {
                                        var pub = Mapper.Map<Publisher>(tb.Publisher);
                                        success = PublishersManager.AddPublisher(pub);
                                        if (success)
                                        {
                                            var text = Mapper.Map<Textbook>(tb);
                                            text.AuthorID = author.ID;
                                            text.PublisherID = pub.ID;
                                            success = TBManager.AddTextbook(text);
                                            if (success)
                                            {
                                                RedirectToAction("Details", new { id = text.ID });
                                            }
                                            else
                                            {
                                                ModelState.AddModelError("", "Failed to save textbook. Please try again.");
                                            }
                                        }
                                        else
                                        {
                                            ModelState.AddModelError("", "Failed to save publisher. Please try again.");
                                        }
                                    }
                                    else
                                    {
                                        ModelState.AddModelError("", "Failed to save author. Please try again.");
                                    }
                                }
                                else
                                {
                                    ModelState.AddModelError("", "Failed to save person. Please try again.");
                                }
                            }
                        }
                    }
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(tb);
        }

        //
        // GET: /Textbook/Edit/5
        [HttpGet]
        public ActionResult Edit(int id)
        {
            using (InstManager)
            {
                using (PublishersManager)
                {
                    using (AuthorsManager)
                    {
                        using (PeopleManager)
                        {
                            var tb = TBManager.GetTextbookbyID(id);
                            var disp = Mapper.Map<vmTextbook>(tb);
                            disp.Publisher = Mapper.Map<vmPublisher>(PublishersManager.GetPublisherbyID(tb.PublisherID));
                            disp.Author = Mapper.Map<vmAuthor>(AuthorsManager.GetAuthorbyID(tb.AuthorID));
                            disp.Author.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.Author.PersonID));
                            return View(disp);
                        }
                    }
                }
            }
        }
        //
        // POST: /Textbook/Edit/5
        [HttpPost]
        public ActionResult Edit(vmTextbook tb)
        {
            try
            {
                using (InstManager)
                {
                    using (PublishersManager)
                    {
                        using (AuthorsManager)
                        {
                            using (PeopleManager)
                            {
                                var text = TBManager.GetTextbookbyID(tb.ID);
                                text.Name = tb.Name;
                                text.PublishDate = tb.PublishDate;
                                var success = TBManager.UpdateTextbook(text);
                                if (success)
                                {
                                    var auth = AuthorsManager.GetAuthorbyID(text.AuthorID);
                                    var pers = PeopleManager.GetPersonbyID(auth.PersonID);
                                    pers.FirstMidName = tb.Author.Person.FirstMidName;
                                    pers.LastName = tb.Author.Person.LastName;
                                    success = PeopleManager.UpdatePerson(pers);
                                    if (success)
                                    {
                                        var pub = PublishersManager.GetPublisherbyID(text.PublisherID);
                                        pub.Name = tb.Publisher.Name;
                                        pub.City = tb.Publisher.City;
                                        pub.State = tb.Publisher.State;
                                        success = PublishersManager.UpdatePublisher(pub);
                                        if (success)
                                        {
                                            return RedirectToAction("Details", new { id = tb.ID });
                                        }
                                        else
                                        {
                                            ModelState.AddModelError("", "Failed to save publisher. Please try again.");
                                        }
                                    }
                                    else
                                    {
                                        ModelState.AddModelError("", "Failed to save person. Please try again.");
                                    }
                                }
                                else
                                {
                                    ModelState.AddModelError("", "Failed to save textbook. Please try again.");
                                }
                            }
                        }
                    }
                }
            }
            catch (DataException)
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");
            }
            return View(tb);
        }

        //
        // GET: /Textbook/Delete/5
        [HttpGet]
        public ActionResult Delete(int id)
        {
            using (InstManager)
            {
                using (PublishersManager)
                {
                    using (AuthorsManager)
                    {
                        using (PeopleManager)
                        {
                            var tb = TBManager.GetTextbookbyID(id);
                            var disp = Mapper.Map<vmTextbook>(tb);
                            disp.Publisher = Mapper.Map<vmPublisher>(PublishersManager.GetPublisherbyID(tb.PublisherID));
                            disp.Author = Mapper.Map<vmAuthor>(AuthorsManager.GetAuthorbyID(tb.AuthorID));
                            disp.Author.Person = Mapper.Map<vmPerson>(PeopleManager.GetPersonbyID(disp.Author.PersonID));
                            return View(disp);
                        }
                    }
                }
            }
        }
        //
        // POST: /Textbook/Delete/5
        [HttpPost]
        public ActionResult Delete(vmTextbook tb)
        {
            try
            {
                using (TBManager)
                {
                    var item = TBManager.GetTextbookbyID(tb.ID);
                    var success = TBManager.RemoveTextbook(item);
                    if (success)
                    {
                        return RedirectToAction("Index");
                    }
                    throw new DataException();
                }
            }
            catch
            {
                //Log the error (add a variable name after DataException)
                ModelState.AddModelError("", "Unable to save changes. Try again, and if the problem persists see your system administrator.");               
            }
            return View(tb);
        }
    }
}

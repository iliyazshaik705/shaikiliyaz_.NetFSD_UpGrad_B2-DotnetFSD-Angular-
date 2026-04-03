using ContactInfo.DataAccess;
using ContactInfo.Models;
using Microsoft.AspNetCore.Mvc;

namespace ContactInfo.Controllers
{
    [Route("contact")]
    public class ContactController : Controller
    {
        private readonly IContactService<Contact> _contactService;

        public ContactController(IContactService<Contact> contactService)
        {
            _contactService = contactService;
        }

        [Route("/")]
        [HttpGet("show", Name = "show")]
        public IActionResult ShowContacts()
        {
            var contacts = _contactService.GetAllContacts();
            return View(contacts);
        }

        // GET: contact/get/5
        [HttpGet("get/{id}", Name = "get")]
        public IActionResult GetContactById(int id)
        {
            var contact = _contactService.GetContactById(id);
            return View(contact);
        }

        // GET: contact/add
        [HttpGet("add", Name = "add")]
        public IActionResult AddContact()
        {
            return View();
        }

        // POST: contact/add
        [HttpPost("add")]
        public IActionResult AddContact(Contact contact)
        {
            _contactService.AddContact(contact);
            return RedirectToRoute("show");
        }
    }
}

using ContactInfo.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Contracts;

namespace ContactInfo.DataAccess
{

    public class ContactService : IContactService<Contact>
    {
        private static List<Contact> contacts = new List<Contact>()
        {
            new Contact
            {
                ContactId = 1,
                FirstName = "Ravi",
                LastName = "Kumar",
                CompanyName = "TCS",
                EmailId = "ravi.kumar@gmail.com",
                MobileNo = 9876543210,
                Designation = "Software Engineer"
            },
            new Contact
            {
                ContactId = 2,
                FirstName = "Sita",
                LastName = "Reddy",
                CompanyName = "Infosys",
                EmailId = "sita.reddy@gmail.com",
                MobileNo = 9123456780,
                Designation = "System Analyst"
            },
            new Contact
            {
                ContactId = 3,
                FirstName = "Arjun",
                LastName = "Varma",
                CompanyName = "Wipro",
                EmailId = "arjun.varma@gmail.com",
                MobileNo = 9012345678,
                Designation = "Developer"
            },
            new Contact
            {
                ContactId = 4,
                FirstName = "Priya",
                LastName = "Sharma",
                CompanyName = "HCL",
                EmailId = "priya.sharma@gmail.com",
                MobileNo = 9988776655,
                Designation = "Tester"
            },
            new Contact
            {
                ContactId = 5,
                FirstName = "Kiran",
                LastName = "Naidu",
                CompanyName = "Capgemini",
                EmailId = "kiran.naidu@gmail.com",
                MobileNo = 9090909090,
                Designation = "Team Lead"
            }
        };

        public void AddContact(Contact contact)
        {
            contacts.Add(contact);
        }

        public List<Contact> GetAllContacts()
        {
            return contacts;
        }

        public Contact GetContactById(int id)
        {
            return contacts.First(c => c.ContactId == id);
        }

    }
}
    


using ContactManagement.Models;

namespace ContactManagement.DataAccess
{
    public class ContactImplementation : IContactRepo<ContactInfo>
    {
        public static List<ContactInfo> contacts = new List<ContactInfo>
        {
             new ContactInfo{ ContactId=1,FirstName="shaik",LastName="Iliyaz",CompanyName="Infosys",EmailId="shaik@gmail.com",MobileNo=98756789,Designation="Trainee Analyst" },
             new ContactInfo{ ContactId=2,FirstName="Yasmin",LastName="shaik",CompanyName="Cognizant",EmailId="yasmin@gmail.com",MobileNo=876546789,Designation="Trainee Analyst" },
             new ContactInfo{ ContactId=3,FirstName="Shashavali",LastName="laddu",CompanyName="wipro",EmailId="laddu@gmail.com",MobileNo=123456789,Designation="Trainee Analyst" }
        };
        public bool AddContact(ContactInfo contact)
        {
            contacts.Add(contact);
            return true;
        }

        public ContactInfo GetContactById(int id)
        {
            var contact = contacts.FirstOrDefault(con => con.ContactId.Equals(id));
            return contact;
        }

        public List<ContactInfo> ShowContacts()
        {
            return contacts;
        }
    }
}

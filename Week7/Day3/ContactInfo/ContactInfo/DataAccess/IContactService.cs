using ContactInfo.Models;

namespace ContactInfo.DataAccess
{
    public interface IContactService<TEntity>
    {
        List<TEntity> GetAllContacts();
        TEntity GetContactById(int id);
        void AddContact(Contact contact);

    }
}

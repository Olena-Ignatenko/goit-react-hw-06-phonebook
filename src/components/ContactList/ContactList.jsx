import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contactsData = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  
  let filterContacts = [];
  //  const filterContacts = contactsData.filter((contact) =>
  if (contactsData !== undefined) { // Перевірка на undefined
    filterContacts = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(search.trim().toLowerCase())
    );
 
    return (
      <ul>
        {filterContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}
export default ContactList;

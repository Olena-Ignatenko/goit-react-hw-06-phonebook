import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = ({  onDelete }) => {
  const contactsData = useSelector((state) => state.contacts);
  const search = useSelector(selectNameFilter);
  
   const filterContacts = contactsData.filter((contact) =>
     contact.name.toLowerCase().includes(search.trim().toLowerCase())
   );
  return (
    <ul>
      {filterContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;

import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

const ContactList = ({  onDelete }) => {
  const contactsData = useSelector((state) => state.contacts);
  return (
    <ul>
      {contactsData.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;

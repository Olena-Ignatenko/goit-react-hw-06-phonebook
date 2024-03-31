import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
 

  // Стан для управління контактами
  // const [contacts, setContacts] = useState(initialContacts);

  // Стан для управління полем пошуку
  // const [searchTerm, setSearchTerm] = useState("");

  

  // Функція для фільтрації контактів за пошуковим терміном
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // Ефект для завантаження контактів з локального сховища
  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (storedContacts && storedContacts.length > 0) {
  //     setContacts(storedContacts);
  //   }
  // }, []);

  // Ефект для збереження контактів у локальне сховище при зміні контактів
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // Функція для додавання нового контакту

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  // };

  // Функція для видалення контакту

  // const deleteContact = (id) => {
  //   const updatedContacts = contacts.filter((contact) => contact.id !== id);
  //   setContacts(updatedContacts);
  // };

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox  />
        <ContactList  />
      </div>
    </>
  );
};

export default App;

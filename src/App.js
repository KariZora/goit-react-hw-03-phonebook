import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import Section from "./components/Section/Section";

function App() {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const localContacts = () => JSON.parse(localStorage.getItem("contact")) || [];

  const [contacts, setContacts] = useState(localContacts);
  const [filterName, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    if (!contacts.filter((e) => e.name === newContact.name).length > 0) {
      setContacts([...contacts, newContact]);
      return true;
    }
    alert(`${newContact.name} is already in contacts`);
    return false;
  };

  const handleRemoveContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const contactsList = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm onAdd={handleAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter filterName={filterName} onChange={setFilter} />
        <ContactsList contacts={contactsList} onRemove={handleRemoveContact} />
      </Section>
    </div>
  );
}

export default App;

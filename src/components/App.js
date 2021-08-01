import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from "./ContactList";
import { getDefaultNormalizer } from '@testing-library/react';


function App() {

const [contacts, setContacts] =useState([]); 

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHanlder= {addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

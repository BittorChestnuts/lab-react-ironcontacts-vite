import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';


// check if the contact won an Oscar
const hasOscars = (oscars) => {
  return oscars ? "🏆" : "";
};

// check if the contact won an Emmy
const hasEmmy = (emmy) => {
  return emmy ? "🏆" : "";
};

function App() {
  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(20, 25));

const addRandomContact = () => {
  const remainingContacts = contacts.filter(contact => !displayedContacts.includes(contact));
  const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
  setDisplayedContacts(prevContacts => [randomContact, ...prevContacts]);
};

const sortByName = () => {
  setDisplayedContacts(prevContacts =>
    [...prevContacts].sort((a, b) => a.name.localeCompare(b.name))
  );
};

const sortByPopularity = () => {
  setDisplayedContacts(prevContacts =>
    [...prevContacts].sort((a, b) => b.popularity - a.popularity)
  );
};

const removeContact = (contactId) => {
  setDisplayedContacts((prevContacts) =>
    prevContacts.filter((eachContact) => eachContact.id !== contactId)
  );
};

  return (
    <div className="App">
      <h1>📹 LAB | React IronContacts </h1>
      <button onClick={addRandomContact}> ➕ Random Contact</button>
      <button onClick={sortByName}>🔃 Name</button>
      <button onClick={sortByPopularity}>📈 Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td><img id='img' width='150px' height='200px' src={contact.pictureUrl} alt={contact.name} /></td>
              <td>{contact.popularity}</td>
              <td>{hasOscars(contact.wonOscar)}</td>
              <td>{hasEmmy(contact.wonEmmy)}</td>
              <td><button onClick={() => removeContact(contact.id)}>trash! 🚯</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
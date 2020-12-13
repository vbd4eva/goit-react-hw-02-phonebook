import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import ContactAddingForm from './components/ContactAddingForm/ContactAddingForm'
import ContactFilter from './components/ContactFilter/ContactFilter'
import ContactList from './components/ContactList/ContactList'
import Notification from './components/Notification/Notification'

export class App extends Component {
  state = {
    filter: '',
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    
  }

  findInContacts = (newContactName) => this.state.contacts.find(({ name }) => name === newContactName);
  
  addNewContact(newContactCart){
    const newContact = {id:uuidv4(),...newContactCart};
    this.setState(
      ({ contacts }) => 
      ({contacts: [newContact,...contacts], })
    );
  }

  onDoubleAddingReaction(doubleContact) { 
    const { name } = doubleContact;      
    alert(name + ' is already in contacts.');

    this.setState({ filter: name });
  }

  handleContactCart = (newContactCart) =>{   
    const doubleContact = this.findInContacts(newContactCart.name);  
    if (doubleContact) { 
      this.onDoubleAddingReaction(doubleContact);
      return
    }
    this.addNewContact(newContactCart)
  }


  changeStateFilter = (e) => { 
    const {name, value } = e.currentTarget;
    this.setState({ [name]: value });    
  }

  deleteContact = (contactId) => { 
    const newContactList = this.state.contacts.filter(
      ({id}) =>(id !== contactId)
    );
    this.setState({
      contacts: newContactList
    });
  }

  render() {
    const { filter, contacts } = this.state;
    console.log(contacts.length);
    const filterNormalized = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(
      ({name}) => name.toLocaleLowerCase().includes(filterNormalized)
    );

    return (
      <>
        <h1>Phonebook</h1>  
        <ContactAddingForm onSubmit={this.handleContactCart} />

        {(contacts.length > 0)
          ?
          (<>
            <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={this.changeStateFilter} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
          </>)
          :
          <Notification message="PhoneBook is emty"/>
        }
        
      </>
    )
  }
}

export default App




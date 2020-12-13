import React from 'react'
import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem/ContactListItem'

function ContactList({ contacts, deleteContact }) {
    return (
        <ul>
            {contacts.map(
                ({ id, name, number }) => 
                    (<li key={id}>
                        <ContactListItem
                            name={name}
                            number={number}
                            deleteContact={()=>deleteContact(id)}
                        />
                    </li>)
            )}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default ContactList


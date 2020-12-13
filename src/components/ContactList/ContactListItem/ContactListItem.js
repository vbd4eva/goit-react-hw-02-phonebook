import React from 'react'
import PropTypes from 'prop-types'

function ContactListItem({ name, number, deleteContact}) {
    return (
        <>
            <span>{name} : {number}</span> <button type="button" onClick={deleteContact} >удалить</button>
        </>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}

export default ContactListItem


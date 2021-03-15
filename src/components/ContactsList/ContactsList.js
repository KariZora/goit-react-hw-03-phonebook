import PropTypes from "prop-types";

const ContactsList = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name.charAt(0).toUpperCase() + contact.name.slice(1)}:{" "}
          {contact.number}
          <button onClick={() => onRemove(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;

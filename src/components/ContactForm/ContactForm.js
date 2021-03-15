import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./contactForm.module.css";
import PropTypes from "prop-types";

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    if (!name || !number) return;
    if (
      onAdd({
        id,
        name,
        number,
      })
    ) {
      setName("");
      setNumber("");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{
        margin: "0 auto",
      }}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;

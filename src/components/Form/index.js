// Referencing code from Module 20
import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from '../utils/helpers.js';

export default function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!name || !validateEmail(email)) {
      setErrorMessage('Name or email is invalid.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Please enter in a valid message.`
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="mt-3 container">
      <form className="form">
        <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            className='form-control mx-auto'
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          className='form-control mx-auto'
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
          className='form-control mx-auto'
        />
        <button
            type="submit"
            class="btn btn-primary mt-1"
            onClick={handleFormSubmit}>
                Submit
        </button>
      </form>
      {errorMessage && (
        <div className='mt-3'>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

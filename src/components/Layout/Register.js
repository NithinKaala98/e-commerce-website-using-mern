import React, { useState, Link } from 'react';
import "./Register.css"

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here, e.g., send data to backend API

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <img src="/images/banner.png" id="banner"></img>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
            <br/>
          Phone:
          <input type="number" value={phone} onChange={handlePhoneChange} id='phone' />
        </label>
        <br />
        <button type="submit"><a href="/login">Register</a></button><br/><br/>
        <button type="submit"><a href="/login">Already registed?</a></button><br/>
      </form>
    </div>
  );
}

export default Register;

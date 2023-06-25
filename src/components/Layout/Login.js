import react, { useState } from "react";
import "./Register.css"

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <img src="/images/banner.png" id="banner"></img>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit"><a href="/">Login</a></button>
      </form>
    </div>
  );
}

export default Login

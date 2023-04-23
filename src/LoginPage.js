import React, { useState } from 'react';
import './LoginPage.css';
import Footer from './Footer';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'username' && password === 'password') {
        onLogin();
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {loginError && (
          <p className="login-error">
            Incorrect username or password. Please try again.
          </p>
        )}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default LoginPage;

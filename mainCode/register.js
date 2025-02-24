import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import img1 from "./img1.png";

const Header = () => {
  return (
    <header className="navbar">
      <div className="chettinad">
        <img src={img1} alt="logo" />
        <h1>Contacts Manager</h1>
      </div>
      <div>
        {/* ✅ Sign Up Button that Redirects to Register Page */}
        <Link to="/" className="auth-button">Login</Link>
      </div>
    </header>
  );
};

const Register = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-heading">REGISTER</h2> 
      <div className="auth-box">
        <form className="auth-form">
          
          <p className="input-field">
            <label htmlFor="email">Enter Email: </label>
            <input type="email" placeholder="Email" id="email" name="email" />
          </p>
          <p className="password-field">
            <label htmlFor="password">Enter Password: </label>
            <input type="password" placeholder="Password" id="password" name="password" />
          </p>
          <br />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>

        {/* ✅ Link to Login Page */}
        <p className="back-to-auth">
          Already have an account? <Link to="/" className="back-link">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

const App = () =>{
  return (
    <div>
      <Header />
      <Register />
    </div>
  );
};

export default App;

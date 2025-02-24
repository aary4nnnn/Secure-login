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
        <h1 style={{color:"black"}}>Contacts Manager</h1>
      </div>
      <div>
        {/* ✅ Sign Up Button that Redirects to Register Page */}
        <Link style={{color:"black"}}to="/register" className="auth-button">Sign Up</Link>
      </div>
    </header>
  );
};

const Login = () => {
  return (
    <div className="auth-container"> {/* ✅ Uses the same styles as Register */}
      <h2 className="auth-heading">LOGIN</h2> 
      <div className="auth-box">
        <form className="auth-form">
          <p className="input-field">
            <label htmlFor="email">Enter Email: </label>
            <input type="text" placeholder="Email" id="email" name="email" />
          </p>
          <p className="password-field">
            <label htmlFor="password">Enter Password: </label>
            <input type="password" placeholder="Password" id="password" name="password" />
          </p>
          <br />
                  
        <Link style={{color:"black"}}to="/Home" className="auth-button2">Login</Link>
      
        </form>

        
        <p className="back-to-auth">
          Don't have an account? <Link to="/register" className="back-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <h2 style={{textAlign:"center"}}>ABOUT</h2>
      <p>A secure and efficient login system that protects user credentials using modern cryptographic techniques like hashing and dynamic salting to prevent unauthorized access and data breaches.</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Contacts Manager. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Login />
      <About />
      <Footer />
    </div>
  );
};
export default App;



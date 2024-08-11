import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import CartIcon from '../../pages/CartIcon';
import './Navbar.css';

  function MyNavbar({ NavbarTitle = "EcommerceApp" }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const {language, setLanguage} = useContext(LanguageContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary"
      bg={darkMode ? "dark" : "light"}
   
      data-bs-theme={darkMode ? "dark" : "light"}
    >
    
      <Container>
      <Navbar.Brand href="/">{NavbarTitle ?? "EcommerceApp"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  ">
        
        
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
      

          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
           <CartIcon/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <svg style={{width: "20px", height: "20px", marginLeft: "10px", transform: `rotateZ(${darkMode ? "180deg" : "0deg"})`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={()=>setDarkMode(!darkMode)}>
          <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
        </svg>
        <span style={{cursor: "pointer"}} className="p-2 mx-3" onClick={()=>setLanguage(language === "en" ? "ar" : "en")}>{language}</span>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

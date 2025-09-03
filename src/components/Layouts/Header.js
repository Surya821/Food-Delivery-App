import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll"; // 👈 use this instead
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <ScrollLink to="home" smooth={true} duration={500} className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as="span">
                <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
              </Nav.Link>
              <Nav.Link as="span">
                <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
              </Nav.Link>
              <Nav.Link as="span">
                <ScrollLink to="menu" smooth={true} duration={500}>Our Menu</ScrollLink>
              </Nav.Link>
              <Nav.Link as="span">
                <ScrollLink to="shop" smooth={true} duration={500}>Shop</ScrollLink>
              </Nav.Link>
              <Nav.Link as="span">
                <ScrollLink to="blog" smooth={true} duration={500}>Blog</ScrollLink>
              </Nav.Link>
              <Nav.Link as="span">
                <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
              </Nav.Link>
              <Nav.Link as="span">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

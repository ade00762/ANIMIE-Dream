import React, { useState } from 'react';
import { NavLink, Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar expand="md">

            {/* <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} /> */}
            <div className="container">
                <Link to="/" className="navbar-brand">Anime</Link>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/review" className="nav-link">Review</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" className="nav-link">Log In</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink to="/register"  className="nav-link">Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    </div>
  );
}

export default Header;
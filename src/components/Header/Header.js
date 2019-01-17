import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

// eslint-disable-next-line prefer-arrow-callback
const Header = () => {
  const [collapsed, toggleCollapsed] = useState(false);
  return (
    <AuthContext.Consumer>
      {context => (
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Wiktor Płocki</NavbarBrand>
          <NavbarToggler
            onClick={() => toggleCollapsed(!collapsed)}
            className="mr-2"
          />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="mailto:wiktor.plocki@gmail.com">
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span> Email</span>
                      </span>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/wiktorplocki">
                      <span>
                        <FontAwesomeIcon icon={faGithub} />
                        <span> GitHub</span>
                      </span>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://www.linkedin.com/in/wiktor-plocki/">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span> LinkedIn</span>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </AuthContext.Consumer>
  );
};

// React-Bootstrap port

// const Header = () => (
//   <Navbar bg="faded" expand="md">
//     <Navbar.Brand href="/">Wiktor Płocki</Navbar.Brand>
//     <Navbar.Toggle className="mr-2" />
//     <Navbar.Collapse id="collapse">
//       <Nav className="ml-auto">
//         <Nav.Link href="/">Home</Nav.Link>
//         <Nav.Link href="/projects">Projects</Nav.Link>
//         <NavDropdown title="Contact" id="dropdown">
//           <NavDropdown.Item href="mailto:wiktor.plocki@gmail.com">
//             <span>
//               <FontAwesomeIcon icon={faEnvelope} />
//               <span> Email</span>
//             </span>
//           </NavDropdown.Item>
//           <NavDropdown.Item href="https://github.com/wiktorplocki">
//             <span>
//               <FontAwesomeIcon icon={faGithub} />
//               <span> GitHub</span>
//             </span>
//           </NavDropdown.Item>
//           <NavDropdown.Item href="https://www.linkedin.com/in/wiktor-plocki/">
//             <span>
//               <FontAwesomeIcon icon={faLinkedin} />
//               <span> LinkedIn</span>
//             </span>
//           </NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );

export default Header;

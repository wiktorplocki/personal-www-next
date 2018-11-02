import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

// eslint-disable-next-line prefer-arrow-callback
const Header = React.memo(function Header() {
  const [collapsed, toggleCollapsed] = useState(false);
  return (
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
  );
});

Header.propTypes = {
  collapsed: PropTypes.bool,
  toggleCollapsed: PropTypes.func
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

const Footer = () => (
  <AuthContext.Consumer>
    {context => (
      <ul className="footer">
        {context.token ? (
          <React.Fragment>
            <li>
              <NavLink to="/admin" className="small">
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" className="small" onClick={context.logout}>
                Logout
              </NavLink>
            </li>
          </React.Fragment>
        ) : (
          <li>
            <NavLink to="/login" className="footer--login small">
              Login
            </NavLink>
          </li>
        )}
      </ul>
    )}
  </AuthContext.Consumer>
);

export default Footer;

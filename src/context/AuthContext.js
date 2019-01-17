import { createContext } from 'react';

export default createContext({
  token: null,
  tokenExpiry: null,
  login: (token, tokenExpiry) => {},
  logout: () => {}
});

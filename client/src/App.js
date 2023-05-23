import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 React themes
import theme from "assets/theme";

import Navbar from "./components/Navbar/Navbar";

import RouterBranch from "RouterBranch";

import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import Notification from "./Notification";
import Alert from './Alert';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <div style={{backgroundColor : "#F5F5F5"}}>
            <Navbar />
            <MDBox className="main-container">
              <RouterBranch />
            </MDBox>
            <Notification />
            <Alert />
          </div>
          
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

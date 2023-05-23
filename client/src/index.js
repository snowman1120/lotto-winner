import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

ReactDOM.render(
    <MaterialUIControllerProvider>
        <App />
    </MaterialUIControllerProvider>,
    document.getElementById("root")
  );
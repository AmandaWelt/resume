import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SidebarProvider } from './context/SidebarContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <Router>
        <App />
      </Router>
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


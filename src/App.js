import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HomeNavbar from './components/shared/navbar';
import './App.css';


function App() {
  return (
    <React.Fragment>
    <Router>
      <HomeNavbar/>
    </Router>
  </React.Fragment>
  );
}

export default App;

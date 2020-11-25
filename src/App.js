import React from 'react';
import Navbar from './components/Navbar.js';
import Table from './components/Table.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div id="navbar-container">
        <Navbar></Navbar>
      </div>
      <div id="main-body">
        <Table></Table>
      </div>
    </div>
  );
}

export default App;

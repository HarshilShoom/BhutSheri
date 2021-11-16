import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// imports bootstrap CSS File
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

// Custom Components import.

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <div>
          <h1>Welcome to BhutSheri</h1>
          <Button variant="primary">HI</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

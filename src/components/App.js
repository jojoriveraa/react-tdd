import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className='btn-add'>Add Gift</Button>
      </div>
    );
  }
}

export default App;

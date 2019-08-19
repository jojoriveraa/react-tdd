import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }

  addGift = () => {
    /**
     * For each new gift the id must be equal to the existing maximum plus one
     */
    // get a local copy of gifts array
    const { gifts } = this.state;
    // get all ids in an array
    const ids = gifts.map(g => g.id);
    // get the max id in the array, if there is no id set 0
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    // push a new item with the new id
    gifts.push({ id: maxId + 1 });
    // replace state gifts with the local copy
    this.setState({ gifts });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(g => {
            return <Gift key={g.id} />;
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;

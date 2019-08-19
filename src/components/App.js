import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';

class App extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }

  addGift = () => {
    /**
     * Get all the gifts and the max id in the array.
     * Then calculate the new id and add that gift to the array.
     * Finally, save the array as the new gift list
     */
    const { gifts } = this.state;
    const ids = gifts.map(g => g.id);
    const maxId = max_number(ids);
    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    /**
     * Get all the gifts but the one with selected id and
     * save the array as the new gift list
     */
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(g => {
            return <Gift key={g.id} gift={g} removeGift={this.removeGift} />;
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

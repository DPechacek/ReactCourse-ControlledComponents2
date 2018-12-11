import React, {Component} from 'react';
import './App.css';
import AddItem from './AddItem';
import ItemList from './ItemList';

class ShoppingList extends Component {
  state = {
    value: '',
    items: [],
  };
  
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <AddItem value={this.state.value} 
                 addItem={this.addItem}
                 handleChange={this.handleChange}
                 inputIsEmpty={this.inputIsEmpty}/>

        <ItemList items={this.state.items} 
                  deleteLastItem={this.deleteLastItem} 
                  noItemsFound={this.noItemsFound}/>
      </div>
    );
  }
}

export default ShoppingList;

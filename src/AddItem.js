import React from 'react';
import './App.css';

function AddItem(props) {
  return (
    <form onSubmit={props.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={props.value}
          onChange={props.handleChange}
        />
        <button disabled={props.inputIsEmpty()}>Add</button>
      </form>
  );
}

export default AddItem;
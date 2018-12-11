import React from 'react';
import './App.css';

function ItemList(props) {
  return (
    <div>
      <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
          Delete Last Item
      </button>

      <p className="items">Items</p>
      <ol className="item-list">
        {props.items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>
  )
}

export default ItemList;
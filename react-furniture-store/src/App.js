import React, { Component } from 'react';
import './App.css';
import StoreContainer from "./Components/StoreContainer/storeContainer.jsx"
import ItemContainer from './Admin/ItemContainer/itemContainer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <StoreContainer />
          <ItemContainer />
        </React.Fragment>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
// import Login from './Login';
import StoreContainer from "./Components/StoreContainer/storeContainer.jsx"
import ItemContainer from './Admin/ItemContainer/itemContainer.jsx';
import { Route, Switch } from 'react-router-dom';

const My404 = () => {
  return (
    <div>
      <p>Error 404 Page Not Found</p>
    </div>
  )
};

const App = () => {
  return (
    <main>
      <Switch>
        {/* <Route exact path='/' component={ Login } /> */}
        <Route exact path='/shop' component={ StoreContainer } />
        <Route exact path='/admin' component= { ItemContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
};

export default App;
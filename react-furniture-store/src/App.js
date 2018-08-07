import React from 'react';
import './App.css';
import StoreContainer from "./Components/StoreContainer/storeContainer.jsx"
import ItemContainer from './Admin/ItemContainer/itemContainer.jsx';
// import { Route, Switch } from 'react-router-dom';

// const My404 = () => {
//   return (
//     <div>
//       <p>Error 404 Page Not Found</p>
//     </div>
//   )
// };

const App = () => {
  return (
    <main>
      {/* <Switch> */}
        {/* <Route exact path='/home' component={ StoreContainer } /> */}
        {/* <Route exact path='/home' component= { ItemContainer } />
        <Route component={ My404 } /> */}

      {this.state.showEdit ? <ItemContainer /> : <StoreContainer />}

      {/* </Switch> */}
    </main>
  )
};

export default App;
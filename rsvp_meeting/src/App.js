import React from 'react';
import './App.css';
import Navigation from "./Component/Navigation";
import Register from './Component/Register';
import Search from './Component/Search';
import Report from "./Component/Report";
import UserD from './Component/UserD'
import {Switch,Route,Redirect} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Navigation/>
      
      <Switch>
      <Route exact path="/" component={Register} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/details/:_id" component={UserD} />
       

        <Redirect to="/" />

      </Switch>

      
      
    </div>
  );
}

export default App;

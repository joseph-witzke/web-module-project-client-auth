import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//import components
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  //logout goes here


  return (
    <Router>
    <div className="App">
      <nav>
        <h1 className='shop-header'>Friend App</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/login' id='friends-login'>Login</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/friends' component={FriendsList} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

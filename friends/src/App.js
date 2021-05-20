import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

//import components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

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
          <Link to='/friends/add-new'>Add Friend</Link>
        </div>
      </nav>

      <Switch>
        <PrivateRoute path='/friends/add-new' component={AddFriendForm} />
        <PrivateRoute path='/friends' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Redirect path='/login' component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

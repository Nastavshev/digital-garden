import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Login from './components/Login';
import Secret from './components/Secret';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import Logup from './components/Logup';

function App() {
  return (
    <div>
      HELLO!
    </div>
  );
}

export default App;

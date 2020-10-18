import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Login from './components/Login';
import Secret from './components/Secret';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import Logup from './components/Logup';
import Footer from './components/HeaderFooter/Footer';
import Header from './components/HeaderFooter/Header/';
import './App.css';
import Personal from './components/Personal/';
import Garden from './components/Garden/'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/user/logout">
            Выход
        {/* <Logout /> */}
          </Route>
          <Route path="/user/account">
            <Personal />
          </Route>
          <Route path="/user/garden">
            <Garden />
          </Route>
          <Route path="/">
            Тут будет главная страница
      </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

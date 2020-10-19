import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Login from '../Login';
import Secret from '../Secret';
import PrivateRoute from '../PrivateRoute';
import Logout from '../Logout';
import Logup from '../Logup';
import ModalBed from '../ModalBed';
import Main from '../Main';
import MonthCalendar from '../MonthCalendar';
import MoonCalendar from '../MoonCalendar';
import Policy from '../Policy';
import Contacts from '../Contacts';
import AboutProject from '../AboutProject';
import Footer from '../HeaderFooter/Footer';
import Header from '../HeaderFooter/Header';
import './App.css';
import Personal from '../Personal';
import Garden from '../Garden'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/user/logout">
            Выход
        <Logout />
          </Route>
          <Route exact path="/user/account">
            <Personal />
          </Route>
          <Route exact path="/user/garden">
            <Garden />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/modal">
            <ModalBed />
          </Route>
          <Route exact path="/mooncalendar">
            <MoonCalendar />
          </Route>
          <Route exact path='/mooncalendar/:idMonth'>
            <MonthCalendar />
          </Route>
          <Route exact path='/logup'>
            <Logup />
          </Route>
          <Route exact path='/policy'>
            <Policy />
          </Route>
          <Route exact path='/contacts'>
            <Contacts />
          </Route>
          <Route exact path='/about'>
            <AboutProject />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

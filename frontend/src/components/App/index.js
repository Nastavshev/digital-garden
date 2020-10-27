import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Logout from '../Logout/Logout';
import ModalBed from '../ModalBed';
import Articles from '../Articles';
import CreateMessage from '../CreateMessage';
import CurrentArticle from '../CurrentArticle';
import Main from '../Main';
import MonthCalendar from '../MonthCalendar';
import MoonCalendar from '../MoonCalendar';
import Policy from '../Policy';
import Contacts from '../Contacts';
import AboutProject from '../AboutProject';
import Footer from '../HeaderFooter/Footer';
import Header from '../HeaderFooter/Header';
import styles from './index.module.css';
import Personal from '../Personal';
import Garden from '../Garden';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/user/logout">
            Выход
            <Logout />
          </Route>
          <PrivateRoute exact path="/user/account">
            <Personal />
          </PrivateRoute>
          <PrivateRoute exact path="/user/garden/:idGarden">
            <Garden />
          </PrivateRoute>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/modal">
            <ModalBed />
          </Route>
          <Route exact path="/mooncalendar">
            <MoonCalendar />
          </Route>
          <Route exact path="/mooncalendar/:idMonth">
            <MonthCalendar />
          </Route>
          <Route exact path="/policy">
            <Policy />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/about">
            <AboutProject />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/articles/:idArticle">
            <CurrentArticle />
          </Route>
          <Route path="/articles/:idArticle/newMessage" exact>
            <CreateMessage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

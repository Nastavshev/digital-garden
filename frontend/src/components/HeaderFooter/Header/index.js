import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import woman from '../../../logo/housekeeper.png';
import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.css';
import Signup from '../../Modal/ModalSignup';
import Login from '../../Modal/ModalLogin';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { modalLogin } from '../../../redux/modalLoginActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const classes = useStyles();
  const [openSignup, setOpenSignup] = useState(false);
  const status = useSelector((state) => state.modalLogin);

  const handleClickOpenSignup = () => {
    setOpenSignup(true);
  };

  const handleClickOpenLogin = () => {
    dispatch(modalLogin());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={styles.bar}>
        <Toolbar>
        <div className={styles.link}>
          <NavLink activeClassName={styles.activeLink} className={styles.bar} exact to='/'>Главная
            {/* <Button size="small" className={styles.bar}>Главная</Button> */}
          </NavLink>
          </div>
          <div className={styles.link}>
          <NavLink activeClassName={styles.activeLink} className={styles.bar} to='/mooncalendar'>Лунный календарь
            {/* <Button size="small" className={styles.bar}>Лунный календарь</Button> */}
          </NavLink>
          </div>
          <div className={styles.link}>
          <NavLink activeClassName={styles.activeLink} className={styles.bar} to='/articles'>Статьи
            {/* <Button size="small" className={styles.bar}>Статьи</Button> */}
          </NavLink>
          </div>

          <Typography variant="h6" className={classes.title}>
            <div className={styles.wrapperLogo}>
              <div>
                <img src="/icons/shovel.png" className={styles.logoIcon} />
              </div>
              <div className={styles.logoText}>ВАСИН ОГОРОД</div>
              <div>
                <img src="/icons/vegetables.png" className={styles.logoIcon} />
              </div>
            </div>
          </Typography>

          {isAuthenticated
            ?
            <>
              <Link className={styles.link} to='/user/logout'>
                <Button size="small" className={styles.bar}>Выйти</Button>
              </Link>
              <Link className={styles.link} to='/user/account'>
                <Button size="small" className={styles.bar}>Личный кабинет</Button>
              </Link>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              // onClick={handleMenu}
              >
                <Avatar src={woman} />
              </IconButton>
            </>
            :
            <>
              <Button size="small" className={styles.bar} onClick={handleClickOpenSignup}>Зарегистрироваться</Button>
              <Signup setOpenSignup={setOpenSignup} openSignup={openSignup} />
              <Button size="small" className={styles.bar} onClick={handleClickOpenLogin}>Войти</Button>
              <Login />
            </>
          }
        </Toolbar>
      </AppBar>
      <main className='main'>
      </main>
    </div >
  );
}


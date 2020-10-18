import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import woman from '../../../logo/housekeeper.png';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import Signup from '../../Modal/ModalSignup';
import Login from '../../Modal/ModalLogin';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux'

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
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleClickOpenSignup = () => {
    setOpenSignup(true);
  };

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={styles.bar}>
        <Toolbar>
          {/* <Link to='/user/logout'> */}
          {/* Выход */}
          {/* </Link> */}
          <Link className={styles.link} to='/'>
            <Button size="small" className={styles.bar}>Главная</Button>
            {/* <Title /> */}
          </Link>
          <Link className={styles.link} to='/mooncalendar'>
            <Button size="small" className={styles.bar}>Лунный календарь</Button>
          </Link>

          {isAuthenticated
            ?
            <>
              <Link className={styles.link} to='/user/logout'>
                <Button size="small" className={styles.bar}>Выйти</Button>
              </Link>
            </>
            :
            <>
              <Button size="small" className={styles.bar} onClick={handleClickOpenSignup}>Зарегистрироваться</Button>
              <Signup setOpenSignup={setOpenSignup} openSignup={openSignup} />
              <Button size="small" className={styles.bar} onClick={handleClickOpenLogin}>Войти</Button>
              <Login setOpenLogin={setOpenLogin} openLogin={openLogin} />
            </>
          }

          <Typography variant="h6" className={classes.title}>
            Название
          </Typography>
          {/* {auth && ( */}
          <Link className={styles.link} to='/user/account'>
            <Button size="small" className={styles.bar}>Личный кабинет</Button>
          </Link>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          ><Link to='/user/account'>
              <Avatar src={woman} />
            </Link>
          </IconButton>
          {/* )} */}
        </Toolbar>
      </AppBar>
      <main className='main'>
        {/* Кнопка добавления с менюшкой */}
        {/* <CustomizedMenus /> */}
      </main>
    </div >
  );
}


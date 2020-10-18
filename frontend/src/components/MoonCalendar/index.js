import React, { useState, useEffect } from 'react';
import MonthCalendar from '../MonthCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthThunk } from '../../redux/action-creater';
import { Link } from 'react-router-dom';
import styles from './moonCalendar.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",

  },
  media: {
    height: 140,
  },
});

function MoonCalendar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMonthThunk());
  // }, [dispatch]);

  const monthArray = useSelector((state) => state.mooncalendar[0].year.month);
  console.log(monthArray);

  return (
    <>
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="/images/moonCalImg.jpg" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1>Лунный календарь</h1>
          <p>Чтобы ознакомиться с этим календарем, выберите в таблице интересующий Вас месяц, нажмите на него и узнайте самые подробные рекомендации на каждый день этого месяца.</p>
        </div>
        <div className={styles.divFlex}>
          {
            monthArray?.map((element) =>
              <Card className={classes.root} key={element._id}>
                <CardActionArea>
                  <CardMedia className={styles.changeImg}
                    className={classes.media}
                    image={`/images/${element.imageCardMonth}.jpg`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Link to={`/mooncalendar/${element._id}`}>
                      <Typography gutterBottom variant="h5" component="h2">{element.nameMonth}
                      </Typography>
                      <Typography className={styles.typogr} variant="body2" color="textSecondary" component="p">
                        {element.shortInfo.info}
                      </Typography>
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          }
        </div>
      </div>
    </>
  )
}

export default MoonCalendar;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import styles from './index.module.css';


const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function RedAddButton() {
  const classes = useStyles();
  return (
    <div>
      <Fab className={classes.fab} className={styles.addButton}>
        <AddIcon />
      </Fab>
    </div>
  );
}

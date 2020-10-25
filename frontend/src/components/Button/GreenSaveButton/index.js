import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import styles from './index.module.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function GreenSaveButton() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab color="secondary" aria-label="add" className={classes.margin} className={styles.button}>
          <CheckIcon />
        </Fab>
      </div>
    </div>
  );
}

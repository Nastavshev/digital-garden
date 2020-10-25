import React from 'react';
import styles from './index.module.css';
import GreenSaveButton from '../Button/GreenSaveButton';
import RedAddButton from '../Button/RedAddButton';
import tomato from '../../logo/tomato.png';
import aaa from '../../logo/carrot.png';
import { Paper } from '@material-ui/core';
import GardenArea from '../GardenArea/GardenArea';

export default function Garden() {

  return (
    <>
      <div className={styles.mainGarden}>
        <GardenArea/>
      </div>
    </>
  );
}

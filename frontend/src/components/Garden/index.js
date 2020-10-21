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
        {/* <div className={styles.flex}> */}
          {/* <div className={styles.example}>
            Вариант оформления грядки
          <div className={styles.examplegardenBed}>
              <img alt="tomato" className={styles.avatar} src={tomato} />
              <img alt="aaa" className={styles.avatar} src={aaa} />
              <RedAddButton />
            </div>
            <RedAddButton className={styles.addButton} />
          </div> */}
          {/* <Paper elevation={3} className={styles.littleContainer}>
            <h3><strong>ПОГОДА</strong></h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate saepe debitis nihil sunt nulla nam officia amet quibusdam recusandae labore qui illo commodi laborum, reiciendis aut aliquam optio necessitatibus vitae!
          </Paper>
        </div> */}
      </div>
    </>
  );
}

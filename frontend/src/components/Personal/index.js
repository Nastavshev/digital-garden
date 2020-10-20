import React, { useState } from 'react';
import RedAddButton from '../Button/RedAddButton';
import { Paper } from '@material-ui/core';
import woman from '../../logo/housekeeper.png';
import shovel from '../../logo/shovel.png';
import sprout from '../../logo/sprout.png'
import ModalAddGarden from '../Modal/ModalAddGarden';
import styles from './index.module.css'

export default function Personal() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.mainPersonal}>
        <div className={styles.welcomeContainer}>
          <Paper elevation={3} className={styles.welcome}>
            <img alt="woman" className={styles.avatar} src={woman} />
            <h2><strong>ДOБРО ПОЖАЛОВАТЬ, ВАСИЛИСА АЛЬБЕРТОВНА!</strong></h2>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias consequuntur nihil, at doloribus eveniet debitis? Corrupti facilis, explicabo rerum maxime hic et itaque vitae ab neque animi deleniti cumque?
            </Paper>
          <Paper elevation={3} className={styles.littleContainer}>
            <h3><strong>ПОГОДА</strong></h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate saepe debitis nihil sunt nulla nam officia amet quibusdam recusandae labore qui illo commodi laborum, reiciendis aut aliquam optio necessitatibus vitae!
          </Paper>

          <Paper elevation={3} className={styles.littleContainer}>
            <h3><strong>ЛУННЫЙ КАЛЕНДАРЬ</strong></h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse commodi totam dolor ratione, nihil iusto, maiores consectetur voluptatum autem, optio similique tenetur et ipsum animi velit reiciendis natus nemo adipisci.
          </Paper>
        </div>
        <div className={styles.flexGarden}>
          <Paper elevation={3} className={styles.garden}>
            <h3><strong>МОИ ОГОРОДЫ</strong></h3>
            <Paper elevation={3} className={styles.personalGarden}>
              <div>
                <h5>Название участка:</h5>
                <h6>Месторасположение:</h6>
                <h6>Комментарий:</h6>
              </div>
              <div>
                <img alt="sprout" className={styles.shovel} src={sprout} />
                <div>Редактировать</div>
                <img alt="shovel" className={styles.shovel} src={shovel} />
                <div>Удалить</div>
              </div>
            </Paper>
            <p>К сожалению, Ваша история пуста</p>
            <div>Для создания нового участка нажмите красную кнопку ниже</div>
            <div onClick={handleClickOpen} className={styles.buttonOnPersonalPage}><RedAddButton /></div>
            <ModalAddGarden setOpen={setOpen} open={open} />
          </Paper>
        </div>
      </div>
    </>
  );
}

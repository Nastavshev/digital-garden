import React, { useState } from 'react';
import RedAddButton from '../Button/RedAddButton';
import { Paper, Button } from '@material-ui/core';
import woman from '../../logo/housekeeper.png';
import shovel from '../../logo/shovel.png';
import sprout from '../../logo/sprout.png'
import ModalAddGarden from '../Modal/ModalAddGarden';
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { personalGarden } from '../../../redux/personalGardenActions'

export default function Personal() {

  const [open, setOpen] = useState(false);
  const userName = useSelector((state) => state.user.userName);
  const [gardens, setGardens] = useState([]);
  const idUser = useSelector((state) => state.user?.id);

  useEffect(() => {
    (async () => {
      if (idUser) {
        const response = await fetch(`/modals/personal/${idUser}`);
        const data = await response.json();
        setGardens(data);
      }
    })()
  }, [idUser]);

  async function deleteElement(deleteId) {
    const response = await fetch('/modals/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deleteId, idUser })
    });
    const data = await response.json();
    setGardens(data);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.mainPersonal}>
        <div className={styles.welcomeContainer}>
          <Paper elevation={3} className={styles.welcome}>
            <img alt="woman" className={styles.avatar} src={woman} />
            <div className={styles.title}><strong>ДOБРО ПОЖАЛОВАТЬ, {userName}!</strong></div>
             На этой странице Вы можете добавить или отредактировать информации по вашим участкам!
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
            <h3 className={styles.title}><strong>МОИ ОГОРОДЫ</strong></h3>
            {gardens && gardens.map((el) => (
              <div key={el._id}>
                <Paper elevation={3} className={styles.personalGarden}>
                  <div >
                    <p className={styles.greentitle}>{el.title}</p>
                    <div>Месторасположение:{el.location}</div>
                    <div>Комментарий:{el.comment}</div>
                  </div>
                  <div>
                    {/* <img alt="sprout" className={styles.shovel} src={sprout} />
                    <div>Редактировать</div> */}
                    <Button onClick={() => deleteElement(el._id)}><img alt="shovel" className={styles.shovel} src={shovel} />
                      <div className={styles.redtext}>Удалить</div>
                    </Button>
                  </div>
                </Paper>
              </div>
            )
            )}
            {gardens.length === 0
              ? <p>К сожалению, Ваша история пуста!</p>
              : ''}
            <div>Для создания нового участка нажмите красную кнопку ниже</div>

            <div onClick={handleClickOpen} className={styles.buttonOnPersonalPage}><RedAddButton /></div>
            <ModalAddGarden setOpen={setOpen} open={open} />
          </Paper>
        </div>
      </div>
    </>
  );
}

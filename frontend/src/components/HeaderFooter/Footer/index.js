import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './index.module.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'ELBRUS'}
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div className={styles.footer} >
      <footer align="center" >
        <Container>
          <div className={styles.wrapperFooter}>
            <div className={styles.divInfo}>
              <ul>
                <li><Link to="/policy">Политика конфиденциальности</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><Link to="/about">О проекте</Link></li>
              </ul>
            </div>
            <div className={styles.social}>
              <p>ДАВАЙТЕ ДРУЖИТЬ!</p>
              <ul>
                <li><Link to="#" className={styles.socialButton}>
                  <img src="/icons/odnoklassniki.png" />
                </Link></li>
                <li><Link to="#" className={styles.socialButton}>
                  <img src="/icons/vk.png" />
                </Link></li>
                <li><Link to="#" className={styles.socialButton}>
                  <img src="/icons/instagram.png" /></Link></li>
              </ul>
            </div>
            <div>
              <p>РАЗРАБОТАНО:</p>
              <Typography variant="body1">RACCOONS <span role="img" aria-label="raccoons">🦝</span></Typography>
            </div>
          </div>
        </Container>
      </footer >
    </div >
  );
}
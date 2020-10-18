import React from 'react';
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
        <Container maxWidth="sm" >
          <Typography variant="body1">RACCOONS <span role="img" aria-label="raccoons">🦝</span></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

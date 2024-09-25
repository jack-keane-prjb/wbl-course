import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../Container';
import { Icon } from '../../Icon';
import { LinkGeneric } from '../../LinkGeneric';
import { TelLink } from '../../TelLink';
import { UserBtns } from '../../UserBtns';
import styles from './mainrow.css';

export function MainRow() {
  return (
    <Container className={styles.container}>
      <Link to="/" className={styles.logo}>
        {/* <div className={styles.logo}> */}
        <Icon ico={'logo'}></Icon>
        {/* </div> */}
      </Link>
      <TelLink className={styles.TelLink} />
      <UserBtns className={styles.UserBtns} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/catalog">
              <LinkGeneric className={styles.link}>Каталог</LinkGeneric>
            </Link>
          </li>
          <li>
            <LinkGeneric className={styles.link}>Магазины</LinkGeneric>
          </li>
          <li>
            <LinkGeneric className={styles.link}>Шоу-рум</LinkGeneric>
          </li>
          <li>
            <LinkGeneric className={styles.link}>Доставка и оплата</LinkGeneric>
          </li>
          <li>
            <LinkGeneric className={styles.link}>Дисконт</LinkGeneric>
          </li>
          <li>
            <LinkGeneric className={styles.link}>Контакты</LinkGeneric>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

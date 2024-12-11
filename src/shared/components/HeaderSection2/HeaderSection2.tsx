import React from 'react';
import { Container } from '../Container';
import { TelLink } from '../TelLink';
import { UserBtns } from '../UserBtns';
import styles from './headersection2.css';

export function HeaderSection2() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <TelLink className={styles.telLink} />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.li}>
              <a href="#" className={styles.a}>
                О компании
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.a}>
                Гарантия и возврат
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.a}>
                Корпоративным клиентам
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.a}>
                Дизайн-решение
              </a>
            </li>
          </ul>
        </nav>
        <UserBtns className={styles.UserBtns} />
      </Container>
    </section>
  );
}

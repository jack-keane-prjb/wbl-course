import React from 'react';
import styles from './navbar.css';
import { Container } from '../Container';

interface INavBar {
  className?: string;
  children?: string[];
}

export function NavBar({ className, children = [] }: INavBar) {

  // REC: даже вспомнил, как это делается:
  const path = children.map((child) => {
    return <>
      <span className={styles.delimeter}>/</span>
      <a href="#" className={`${styles.pathPart} ${styles.pathPartLast}`}>{child}</a>
    </>
  })

  return (
    <Container>
      <div className={`${styles.navBar} ${className}`}>
        <a href="#" className={styles.pathPart}>
          Главная
        </a>
        <span className={styles.delimeter}>/</span>
        <a href="#" className={styles.pathPart}>
          Каталог
        </a>
        <span className={styles.delimeter}>/</span>
        <a href="#" className={styles.pathPart}>
          Диваны
        </a>
        <span className={styles.delimeter}>/</span>
        <a href="#" className={`${styles.pathPart} ${styles.pathPartLast}`}>
          Прямые диваны
        </a>
        {path}

      </div>
    </Container>
  );
}

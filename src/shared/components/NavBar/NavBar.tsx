import React from 'react';
import styles from './navbar.css';

interface INavBar {
  className?: string;
}

export function NavBar({ className }: INavBar) {
  return (
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
    </div>
  );
}

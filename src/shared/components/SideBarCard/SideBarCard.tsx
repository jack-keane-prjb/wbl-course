import React from 'react';
import { ButtonText } from '../ButtonText';
import styles from './sidebarcard.css';

interface ISideBarCard {
  img?: string;
  imgAlt?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function SideBarCard({
  img,
  imgAlt,
  title,
  description,
  className = '',
}: ISideBarCard) {
  return (
    <div className={`${styles.card} ${className}`}>
      <img src={img} alt={imgAlt} />
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <ButtonText className={styles.btn} icon iconSize="small">
          В каталог
        </ButtonText>
      </div>
    </div>
  );
}

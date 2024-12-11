import React from 'react';
import { ButtonTransparent } from '../ButtonTransparent';
import styles from './usefulсard.css';

export interface IUsefulCard {
  img: string;
  text: string;
  className?: string;
}

export function UsefulСard({ img, text, className = '' }: IUsefulCard) {
  return (
    <div className={`${styles.card} ${className}`}>
      <img src={img} alt="cardImg" className={`${styles.image}`} />
      <div className={styles.container}>
        <span className={styles.text}>{text}</span>
        <ButtonTransparent className={styles.button} text="Читать" />
      </div>
    </div>
  );
}

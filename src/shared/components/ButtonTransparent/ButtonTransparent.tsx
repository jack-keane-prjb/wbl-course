import React from 'react';
import styles from './buttontransparent.css';

interface IButtonTransparent {
  text?: string;
  className?: string;
}

export function ButtonTransparent({
  text = 'Buy',
  className,
}: IButtonTransparent) {
  return <button className={`${styles.btn} ${className}`}>{text}</button>;
}

import React from 'react';
import styles from './button.css';

interface IButton {
  children?: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: IButton) {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
}

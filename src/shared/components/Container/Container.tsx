import React from 'react';
import styles from './container.css';

interface IContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: IContainerProps) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

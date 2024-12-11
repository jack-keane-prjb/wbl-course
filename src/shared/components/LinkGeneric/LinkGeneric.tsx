import React from 'react';
import styles from './linkgeneric.css';

interface ILinkGeneric {
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

export function LinkGeneric({ className, href = '#', children }: ILinkGeneric) {
  return (
    <a className={`${styles.a} ${className}`} href={href}>
      {children}
    </a>
  );
}

import React from 'react';
import { HeaderSection2 } from '../HeaderSection2';
import styles from './header.css';
import { HeaderSection3 } from '../HeaderSection3';
import { HeaderSection1 } from '../HeaderSection1';

export function Header({ className = '' }: { className?: string }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <HeaderSection1 />
      <HeaderSection2 />
      <HeaderSection3 />
    </header>
  );
}

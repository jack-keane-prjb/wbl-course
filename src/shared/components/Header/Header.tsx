import React from 'react';
import { HeaderSection2 } from '../HeaderSection2';
import { Container } from '../Container';
import styles from './header.css';
import { TelLink } from '../TelLink';
import { HeaderSection3 } from '../HeaderSection3';
import { HeaderSection1 } from '../HeaderSection1';

export function Header({ className = "" }: { className?: string }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <HeaderSection1 />
      {/* REC: интересно, как лучше делать скрытие через css display:none, или же через реакт js. */}
      <HeaderSection2 />
      <HeaderSection3 />
    </header>
  );
}

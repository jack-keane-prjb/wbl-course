import React from 'react';
import { HeaderSection1 } from './HeaderSection1';
import { Container } from '../Container';
import styles from './header.css';
import { TelLink } from '../TelLink';
import { HeaderSection2 } from './HeaderSection2';

export function Header() {
  return (
    <header>
      {/* <= 1024px */}
      <Container className={styles.telLinkRow}>
        <TelLink />
      </Container>


      <HeaderSection1 className={styles.headerSection1} />
      <HeaderSection2 />
    </header>
  );
}

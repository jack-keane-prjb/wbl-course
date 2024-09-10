import React from 'react';
import { ContactsRow } from './ContactsRow';
import { Container } from '../Container';
import styles from './header.css';
import { TelLink } from '../TelLink';
import { Section1 } from './Section1';

export function Header() {
  return (
    <header>
      {/* <= 1024px */}
      <Container className={styles.telLinkRow}>
        <TelLink />
      </Container>

      <ContactsRow />
      <Section1 />
    </header>
  );
}

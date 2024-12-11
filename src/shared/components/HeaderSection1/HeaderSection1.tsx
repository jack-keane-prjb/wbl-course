import React from 'react';

import styles from './HeaderSection1.css';
import { Container } from '../Container';
import { TelLink } from '../TelLink';

export function HeaderSection1({ className = '' }: { className?: string }) {
  return (
    <section className={styles.section}>
      <Container>
        <TelLink />
      </Container>
    </section>
  );
}

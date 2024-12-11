import React from 'react';
import styles from './copyright.css';
import { Container } from '../Container';

interface ICopyright {
  className?: string;
}

export function Copyright({ className }: ICopyright) {
  return (
    <section className={styles.sectionCopyright}>
      <Container className={styles.containerCopyright}>
        <div className={`${styles.copyright} ${className}`}>SDP® 2011-2021</div>
      </Container>
    </section>
  );
}

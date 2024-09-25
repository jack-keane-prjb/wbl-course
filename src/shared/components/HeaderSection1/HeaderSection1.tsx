import React from 'react';

import styles from './HeaderSection1.css';
import { Container } from '../Container';
import { TelLink } from '../TelLink';


export function HeaderSection1({ className = "" }: { className?: string }) {
  // <= 1024px 
  return (
    <section className={className}>
      < Container className={styles.telLinkRow} >
        <TelLink />
      </Container >
    </section>

  )

}

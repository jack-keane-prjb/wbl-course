import React from 'react';

import styles from './ItemSection.css';
import { Container } from '../Container';
import { ItemInfo } from '../ItemInfo';
import { ItemDescr } from '../ItemDescr';
import { ItemTags } from '../ItemTags';

export function ItemSection({ className = "" }: { className?: string }) {
  return <>
    <section className={className}>
      <Container >
        <div className={`grid ${styles.grid}`}>
          <ItemInfo />
          <ItemDescr />
          <ItemTags />
        </div>
      </Container>
    </section>

  </>
}

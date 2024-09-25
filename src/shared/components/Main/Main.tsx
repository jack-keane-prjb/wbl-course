import React from 'react';

import styles from './Main.css';
import { Hero } from '../Hero';
import { Container } from '../Container';
import { SpecialOffers } from '../SpecialOffers';
import { HighRank } from '../HighRank';
import { Hero2 } from '../Hero2';
import { TopCategories } from '../TopCategories';
import { Useful } from '../Useful';
import { Feedback } from '../Feedback';

export function Main({ className = "" }: { className?: string }) {
  return (
    <main className={className}>
      <Hero className={styles.partition} />
      <SpecialOffers className={styles.partition} />
      <HighRank className={styles.partition} />
      <Hero2 className={styles.partition} />
      <TopCategories className={styles.partition} />
      <Useful className={styles.partition} />
      <Feedback className={styles.partition} />
    </main>
  )
}


// HERE: остановился на том, что унифициовал контейнеры
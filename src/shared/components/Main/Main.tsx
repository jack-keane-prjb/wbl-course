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
import { MainGroup1 } from '../MainGroup1';
import { MainGroup2 } from '../MainGroup2';

export function Main({ className = "" }: { className?: string }) {
  return (
    <main className={className}>
      <Hero />
      <MainGroup1 />
      <Hero2 />
      <MainGroup2 />
    </main>
  )
}


// HERE: остановился на том, что унифициовал контейнеры
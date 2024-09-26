import React from 'react';

import styles from './MainGroup1.css';
import { SpecialOffers } from '../SpecialOffers';
import { HighRank } from '../HighRank';

export function MainGroup1() {
  return <div className={styles.MainGroup1}>
    <SpecialOffers />
    <HighRank />
  </div>;
}

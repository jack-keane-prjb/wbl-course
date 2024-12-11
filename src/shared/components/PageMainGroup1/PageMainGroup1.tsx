import React from 'react';

import styles from './PageMainGroup1.css';
import { SpecialOffers } from '../SpecialOffers';
import { HighRank } from '../HighRank';

export function PageMainGroup1() {
  return (
    <div className={styles.PageMainGroup1}>
      <SpecialOffers />
      <HighRank />
    </div>
  );
}

import React from 'react';
import { Icon } from '../Icon';
import styles from './rankspan.css';

interface IRank {
  rank?: string;
  className?: string;
}

export function RankSpan({ rank, className }: IRank) {
  return (
    <>
      {' '}
      <span className={`${styles.spanRank} ${className}`}>
        <Icon ico="star" size={13} className={styles.ico}></Icon>
        <span className={styles.rankText}>{rank}</span>
      </span>
    </>
  );
}

import React from 'react';

import styles from './PageMainGroup2.css';
import { TopCategories } from '../TopCategories';
import { Useful } from '../Useful';
import { Feedback } from '../Feedback';

export function PageMainGroup2() {
  return (
    <div className={styles.PageMainGroup2}>
      <TopCategories />
      <Useful />
      <Feedback />
    </div>
  );
}

import React from 'react';

import styles from './MainGroup2.css';
import { TopCategories } from '../TopCategories';
import { Useful } from '../Useful';
import { Feedback } from '../Feedback';

export function MainGroup2() {
  return <div className={styles.MainGroup2}>
    <TopCategories />
    <Useful />
    <Feedback />
  </div>;
}

import React, { useEffect, useState } from 'react';
import styles from './displaywidthtester.css';

import useWindowDimensions from '../hooks/useWindowDimensions'

export function DisplayWidthTester() {
  const { height, width } = useWindowDimensions();

  return <div className={styles.displayWidthTester}>
    <span className={styles.text}>width: {width} ~ height: {height}</span>
  </div>
}

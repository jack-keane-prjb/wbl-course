import React from 'react';
import styles from './copyright.css';

interface ICopyright {
  className?: string;
}

export function Copyright({ className }: ICopyright) {
  return (
    <div className={`${styles.copyright} ${className}`}>SDP® 2011-2021</div>
  );
}

import React from 'react';
import { Icon } from '../Icon';
import styles from './tellink.css';

export function TelLink({ className = '' }: { className?: string }) {
  return (
    <a className={`${styles.telLink} ${className}`} href="tel:+74958854547">
      <Icon ico="phone" className={styles.phoneIco}></Icon>
      <span className={styles.telLinkText}>+7 (495) 885-45-47</span>
    </a>
  );
}

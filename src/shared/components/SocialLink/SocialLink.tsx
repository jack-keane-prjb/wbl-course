import React from 'react';
import { Icon } from '../Icon';
import styles from './sociallink.css';

interface ISocialLink {
  ico: string;
  className?: string;
}

export function SocialLink({ ico, className }: ISocialLink) {
  return (
    <a href="#" className={`${styles.link} ${className}`}>
      <Icon ico={ico}></Icon>
    </a>
  );
}

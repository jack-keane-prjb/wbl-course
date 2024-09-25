import React from 'react';
import { Icon } from '../components/Icon';
import styles from './tellink.css';

// TODO: Не совсем понимаю, как бороться с undefined в названии класса. Я прописываю, что его можно и не передавать. Не передаю. И получаю undefined.
// Могу прописать дефолтное "". Но тогда будет пробел перед закрывающими кавычками. И что делать?
export function TelLink({ className = "" }: { className?: string }) {
  return (
    <a className={`${styles.telLink} ${className}`} href="tel:+74958854547">
      <Icon ico="phone" className={styles.phoneIco}></Icon>
      <span className={styles.telLinkText}>+7 (495) 885-45-47</span>
    </a>
  );
}

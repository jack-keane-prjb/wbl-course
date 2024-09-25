import React from 'react';
import { ButtonIcon } from '../components/ButtonIcon';
import styles from './userbtns.css';

export function UserBtns({ className }: { className?: string }) {
  return (
    <div className={`${styles.actions} ${className}`}>
      <ButtonIcon ico="user" />
      <ButtonIcon ico="cart" badge badgeValue={2} />
    </div>
  );
}

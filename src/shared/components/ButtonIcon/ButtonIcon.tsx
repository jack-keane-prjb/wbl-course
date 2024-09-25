import classNames from 'classnames';
import React from 'react';
import { Icon } from '../Icon';
import styles from './buttonicon.css';

interface IButtonIcon {
  ico: string;
  badge?: boolean;
  badgeValue?: number;
}

export function ButtonIcon({ ico, badge, badgeValue }: IButtonIcon) {
  const badgeBtnClass = classNames({ [styles.btnBadged]: badge });

  return (
    <button className={`${styles.btn} ${badgeBtnClass}`}>
      <Icon ico={ico}></Icon>
      {badgeValue ? <span className={styles.badge}>{badgeValue}</span> : <></>}
    </button>
  );
}

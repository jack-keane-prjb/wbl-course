import classNames from 'classnames';
import React from 'react';
import styles from './buttonpagination.css';

interface IButtonPagination {
  text?: string;
  current?: boolean;
}

export function ButtonPagination({ text = '1', current }: IButtonPagination) {
  const btnClasses = classNames({
    [styles.current]: current,
  });

  return <button className={`${styles.btn} ${btnClasses}`}>{text}</button>;
}

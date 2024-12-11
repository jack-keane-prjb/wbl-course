import classNames from 'classnames';
import React from 'react';
import styles from './buttonpagination.css';

interface IButtonPagination {
  text?: string;
  current?: boolean;
  className?: string
}

export function ButtonPagination({ text = '1', current, className = "" }: IButtonPagination) {
  const btnClasses = classNames({
    [styles.current]: current,
  });

  return <button className={`${styles.btn} ${btnClasses} ${className}`}>{text}</button>;
}

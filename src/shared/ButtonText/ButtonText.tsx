import classNames from 'classnames';
import React from 'react';
import styles from './buttontext.css';

type TArrowCircle = 'small';

interface IButtonText {
  children?: string;
  icon?: boolean;
  iconSize?: TArrowCircle;
  className?: string;
}

export function ButtonText({
  children,
  icon,
  iconSize,
  className,
}: IButtonText) {
  const classSize = classNames(styles[`${iconSize}`]);

  return (
    <button className={`${styles.btn} ${className}`}>
      <span className={styles.textSpan}>{children}</span>
      {icon && <div className={`${styles.icon} ${classSize}`}></div>}
    </button>
  );
}

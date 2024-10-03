import React from 'react';
import styles from './buttontransparent.css';
import classNames from 'classnames';

type TButtonTransparentSizes = "small"

interface IButtonTransparent {
  text?: string;
  size?: TButtonTransparentSizes;
  className?: string;
}

export function ButtonTransparent({
  text = 'Buy',
  className,
  size
}: IButtonTransparent) {

  const classes = size ? classNames(styles[`size${size}`]) : "";

  return <button className={`${styles.btn} ${classes} ${className}`}>{text}</button>;
}

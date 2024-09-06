import React from 'react';
import { Icon } from '../Icon';
import styles from './checkbox.css';

interface ICheckBox {
  className?: string;
  labelFor: string;
  name?: string;
  id?: string;
  // text: string;
  children?: string;
}

export function CheckBox(props: ICheckBox) {
  const {
    className,
    labelFor,
    name = labelFor,
    id = labelFor,
    children,
  } = props;

  return (
    <label htmlFor={labelFor} className={styles.label}>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={styles.checkboxNative}
      />
      <span className={styles.checkboxCustom}>
        <Icon className={styles.ico} ico="checkbox_bird" />
      </span>
      <span className={`${styles.text} ${className}`}>{children}</span>
    </label>
  );
}

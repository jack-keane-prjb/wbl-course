import React from 'react';
import { Icon } from '../Icon';
import styles from './checkbox.css';
import classNames from 'classnames';

type TCheckBoxTypes = '' | 'Sidebar';

interface ICheckBox {
  className?: string;
  labelFor: string;
  name?: string;
  id?: string;

  children?: string;
  checkBoxType?: TCheckBoxTypes;
}

export function CheckBox(props: ICheckBox) {
  const {
    className,
    labelFor,
    name = labelFor,
    id = labelFor,
    children,
    checkBoxType,
  } = props;

  const checkBoxFieldClasses = checkBoxType
    ? classNames(styles[`checkBox${checkBoxType}`])
    : '';

  return (
    <label htmlFor={labelFor} className={styles.label}>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={styles.checkboxNative}
      />
      <span className={`${styles.checkboxCustom} ${checkBoxFieldClasses}`}>
        <Icon className={styles.ico} ico="checkbox_bird" />
      </span>
      <span className={`${styles.text} ${className}`}>{children}</span>
    </label>
  );
}

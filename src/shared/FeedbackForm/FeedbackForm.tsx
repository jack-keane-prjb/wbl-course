import React from 'react';
import { Button } from '../Button';
import { CheckBox } from '../CheckBox';
import styles from './feedbackform.css';

export function FeedbackForm() {
  return (
    <form className={styles.form} action="">
      <span className={styles.text}>
        Безусловно, новая модель организационной деятельности в значительной
        степени обусловливает важность распределения внутренних резервов и
        ресурсов.
      </span>
      <input
        className={styles.input}
        type="text"
        placeholder="Как вас зовут?"
      />
      <input className={styles.input} type="text" placeholder="Ваш телефон" />
      <input className={styles.input} type="text" placeholder="Ваш e-mail" />
      {/* REC: совсем забыл, что можно делать overwrite стилей. Не нужно создавать свойство компонента для этого и заморачиватья с classnames */}
      <Button className={styles.button}>Отправить</Button>
      <CheckBox labelFor="AcceptRules" className={styles.checkbox}>
        Принимаю пользовательское соглашение
      </CheckBox>
    </form>
  );
}

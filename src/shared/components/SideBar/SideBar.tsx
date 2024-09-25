import React from 'react';
import { CheckBox } from '../CheckBox';
import { SideBarCard } from '../SideBarCard';
import styles from './sidebar.css';

import sideBarCardImg1 from '../../assets/img/sidebar_card_1.png';

export function SideBar() {
  return (
    <div className={`sidebar ${styles.sidebar}`}>
      <form action="">
        <h4 className={styles.filterBy}>Фильтровать по:</h4>
        <h5 className={styles.filterName}>Цвет</h5>
        <fieldset className={styles.fieldset}>
          <CheckBox className={styles.checkbox} labelFor="brown">
            Коричневый
          </CheckBox>
          <CheckBox className={styles.checkbox} labelFor="black">
            Черный
          </CheckBox>
          <CheckBox className={styles.checkbox} labelFor="blue">
            Синий
          </CheckBox>
          <CheckBox className={styles.checkbox} labelFor="white">
            Белый
          </CheckBox>
        </fieldset>
        <h5 className={styles.filterName}>Категория</h5>
        <fieldset className={styles.fieldset}>
          <CheckBox className={styles.checkbox} labelFor="sofas">
            Диваны
          </CheckBox>
          <CheckBox className={styles.checkbox} labelFor="armchairs">
            Кресла
          </CheckBox>
        </fieldset>
        <h5 className={styles.filterName}>Цена</h5>
        <div className={styles.priceDiv}>
          <span>от</span>
          <input
            className={styles.priceFilterInput}
            type="number"
            placeholder="2000"
          />
          <span>до</span>
          <input
            className={styles.priceFilterInput}
            type="number"
            placeholder="150 000"
          />
        </div>
      </form>
      <SideBarCard
        img={sideBarCardImg1}
        imgAlt="Новая коллекция"
        title="Оксфорд 1950"
        description="Новая коллекция изысканных кресел"
      />
    </div>
  );
}

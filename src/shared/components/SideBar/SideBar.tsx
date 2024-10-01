import React from 'react';
import { CheckBox } from '../CheckBox';
import { SideBarCard } from '../SideBarCard';
import styles from './sidebar.css';

import sideBarCardImg1 from '../../../assets/img/sidebar_card_1.png';

export function SideBar() {
  return (
    <>
      { /* TODO: надо ли тут применять глобальный стиль ? */}
      < div className={`sidebar ${styles.sidebar}`}>
        <form action="">
          <span className={styles.filterBy}>Фильтровать по:</span>
          <span className={styles.filterName}>Цвет</span>
          <fieldset className={styles.fieldset}>
            <CheckBox className={styles.checkbox} labelFor="brown" checkBoxType='Sidebar'>
              Коричневый
            </CheckBox>
            <CheckBox className={styles.checkbox} labelFor="black" checkBoxType='Sidebar'>
              Черный
            </CheckBox>
            <CheckBox className={styles.checkbox} labelFor="blue" checkBoxType='Sidebar'>
              Синий
            </CheckBox>
            <CheckBox className={styles.checkbox} labelFor="white" checkBoxType='Sidebar'>
              Белый
            </CheckBox>
          </fieldset>
          <span className={styles.filterName}>Категория</span>
          <fieldset className={`${styles.fieldset} ${styles.fieldsetCategory}`}>
            <CheckBox className={styles.checkbox} labelFor="sofas" checkBoxType='Sidebar'>
              Диваны
            </CheckBox>
            <CheckBox className={styles.checkbox} labelFor="armchairs" checkBoxType='Sidebar'>
              Кресла
            </CheckBox>
          </fieldset>
          <h5 className={`${styles.filterName} ${styles.filterNamePrice}`}>Цена</h5>
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
      </div >
    </>

  );
}

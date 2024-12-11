import React from 'react';
import { CheckBox } from '../CheckBox';
import { SideBarCard } from '../SideBarCard';
import styles from './sidebar.css';

import sideBarCardImg1 from '../../../assets/img/sidebar_card_1.png';

export function SideBar({ className = '' }: { className?: string }) {
  return (
    <>
      <div className={`${styles.sidebar} ${className}`}>
        <h2 className={`sectionTitle ${styles.title}`}>Каталог</h2>
        <form action="">
          <span className={styles.filterBy}>Фильтровать по:</span>
          <div className={styles.filtersContainer}>
            <div
              className={`${styles.filterWrapper} ${styles.filterWrapperColor}`}
            >
              <span className={styles.filterName}>Цвет</span>
              <fieldset className={styles.fieldset}>
                <CheckBox
                  className={styles.checkbox}
                  labelFor="brown"
                  checkBoxType="Sidebar"
                >
                  Коричневый
                </CheckBox>
                <CheckBox
                  className={styles.checkbox}
                  labelFor="black"
                  checkBoxType="Sidebar"
                >
                  Черный
                </CheckBox>
                <CheckBox
                  className={styles.checkbox}
                  labelFor="blue"
                  checkBoxType="Sidebar"
                >
                  Синий
                </CheckBox>
                <CheckBox
                  className={styles.checkbox}
                  labelFor="white"
                  checkBoxType="Sidebar"
                >
                  Белый
                </CheckBox>
              </fieldset>
            </div>
            <div
              className={`${styles.filterWrapper} ${styles.filterWrapperCategory}`}
            >
              <span className={styles.filterName}>Категория</span>
              <fieldset
                className={`${styles.fieldset} ${styles.fieldsetCategory}`}
              >
                <CheckBox
                  className={styles.checkbox}
                  labelFor="sofas"
                  checkBoxType="Sidebar"
                >
                  Диваны
                </CheckBox>
                <CheckBox
                  className={styles.checkbox}
                  labelFor="armchairs"
                  checkBoxType="Sidebar"
                >
                  Кресла
                </CheckBox>
              </fieldset>
            </div>

            <div
              className={`${styles.filterWrapper} ${styles.filterWrapperPrice}`}
            >
              <span
                className={`${styles.filterName} ${styles.filterNamePrice}`}
              >
                Цена
              </span>
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
            </div>
          </div>
        </form>
        <SideBarCard
          img={sideBarCardImg1}
          imgAlt="Новая коллекция"
          title="Оксфорд 1950"
          description="Новая коллекция изысканных кресел"
          className={styles.sidebarcard1}
        />
      </div>
    </>
  );
}

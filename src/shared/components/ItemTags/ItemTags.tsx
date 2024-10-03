import React from 'react';
import styles from './itemtags.css';

export function ItemTags() {
  const item = {
    tags: {
      guarantee: '18 месяцев',
      vendorСode: 'AAA41269004',
      length: '163 см',
      height: '90 см',
      depth: '108 см',
      sleepingArea: '200 см х 125 см',
      rideHeight: '45 см',
      mechanism: 'Опорный',
      upholsteryType: 'Рогожка',
      color: 'Синий',
      filler: 'Независимый пружинный блок',
      frameMaterial: 'Металл. рама с дерев. латами',
      numberOfSeats: 'Двухместные',
      category: 'Прямые тканевые диваны',
      refund: 'Условия',
    },
  };

  return (
    <div className={styles.itemTags}>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Гарантия</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.guarantee}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Артикул</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.vendorСode}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Длина</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.length}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Высота</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.height}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Глубина</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.depth}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Спальное место</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.sleepingArea}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Высота посадки</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.rideHeight}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Механизм</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.mechanism}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Тип обивки</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.upholsteryType}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Цвет</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.color}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Наполнитель</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.filler}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Материал каркаса</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.frameMaterial}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Количество мест</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.numberOfSeats}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Категория</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.category}</span>
      </div>
      <div className={styles.test}>
        <div className={styles.tagContainer}>
          <span className={styles.tagName}>Возврат</span>
          <span className={styles.delimeter}></span>
        </div>
        <span className={styles.tag}>{item.tags.refund}</span>
      </div>
    </div>
  );
}

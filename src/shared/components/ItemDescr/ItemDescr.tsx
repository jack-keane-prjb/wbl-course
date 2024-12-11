import React from 'react';
import styles from './itemdescr.css';

import item1DescrPic1 from '../../../assets/img/item_d-31_descr_1.png';
import item1DescrPic2 from '../../../assets/img/item_d-31_descr_2.png';

export function ItemDescr() {
  const item1descr = (
    <>
      <h3 className={styles.title}>Опорный механизм</h3>
      <p className={styles.descr}>
        Опорный механизм напоминает пантограф, к которому добавили
        дополнительную секцию. У опорного дивана сиденье «выпрыгивает» вперёд
        и вытаскивает вторую часть спального места. Заключительный штрих —
        опустить спинку.
      </p>
      <p className={styles.descr}>
        Этот механизм не портит пол и не боится ковров. Требуется чуть больше
        силы, чтобы разложить диван, но подросток справится.
      </p>
      <div className={styles.imgContainer}>
        <img
          className={styles.desсrImg}
          src={item1DescrPic1}
          alt="Раскладывающийся механизм дивана. Изображение 1"
        />
        <img
          className={styles.desсrImg}
          src={item1DescrPic2}
          alt="Раскладывающийся механизм дивана. Изображение 2"
        />
      </div>
    </>
  );

  const item = {
    descr: item1descr,
  };

  return <div className={styles.itemDescr}>{item.descr}</div>;
}

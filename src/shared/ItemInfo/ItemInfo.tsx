import React from 'react';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';
import { RankSpan } from '../RankSpan';
import styles from './iteminfo.css';

import item1Pic from '../../assets/img/item_d-31.png';

export function ItemInfo() {
  const item = {
    info: {
      img: item1Pic,
      imgAlt: 'Диван тканевый прямой “D-31”',
      rank: '4,8',
      title: 'Диван тканевый прямой “D-31”',
      shortDescr: 'Мини 120 см без ящика Stark синий (Рогожка)',
      price: '28 490 руб',
    },
  };

  return (
    <>
      <img
        className={styles.itemImg}
        src={item.info.img}
        alt={item.info.imgAlt}
      />
      <div className={styles.itemInfo}>
        <RankSpan rank={item.info.rank} className={styles.rank} />
        {/*TODO: Разобраться бы еще когда делать все-таки h, а когда просто span */}
        <h2 className={styles.title}>{item.info.title}</h2>
        <span className={styles.shortDescr}>{item.info.shortDescr}</span>
        <span className={styles.price}>{item.info.price}</span>
        <Button className={styles.btn}>Купить в один клик</Button>
        <ButtonText>+ Добавить в корзину</ButtonText>
      </div>
    </>
  );
}

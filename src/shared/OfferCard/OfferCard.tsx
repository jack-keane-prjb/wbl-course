import classNames from 'classnames';
import React from 'react';
import { RankSpan } from '../components/RankSpan';
import styles from './offercard.css';

type TSpecialOfferCardSizes = '1x' | '2x';

export interface ISpecialOfferCard {
  discount?: string;
  rank?: string;
  productImg: string;
  productName: string;
  priceDicounted?: string;
  fullPrice?: string;
  size?: TSpecialOfferCardSizes;
  button?: React.ReactNode;
  additionalImg?: string;
}

export function OfferCard(props: ISpecialOfferCard) {
  const {
    discount,
    rank,
    productImg,
    productName,
    priceDicounted,
    fullPrice,
    size = '',
    button,
    additionalImg = '',
  } = props;

  const cardClasses = classNames(styles[`card${size}`]);
  const fullPriceClasses = classNames({
    [styles.striked]: priceDicounted,
  });

  return (
    <div className={`${styles.card} ${cardClasses}`}>
      {discount && (
        <span className={styles.spanDiscount}>{`- ${discount}`}</span>
      )}
      {rank && <RankSpan rank={rank} />}
      <div className={styles.imgContainer}>
        <img src={productImg} alt="productImg" className={styles.productImg} />
      </div>
      <div className={styles.col}>
        <span className={styles.productName}>{productName}</span>
        <div className={styles.priceRow}>
          {priceDicounted && (
            <span className={styles.priceDicounted}>{`${priceDicounted}`}</span>
          )}
          {/* REC: Тут просто схалтурил и просто буду копировать цену с руб */}
          <span className={fullPriceClasses}>{fullPrice}</span>
        </div>
        {button}
      </div>
      {additionalImg && (
        <img
          src={additionalImg}
          alt="productAdditionalImg"
          className={styles.additionalImg}
        />
      )}
    </div>
  );
}

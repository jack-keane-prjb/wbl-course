import classNames from 'classnames';
import React from 'react';
import { RankSpan } from '../components/RankSpan';
import styles from './offercardhighranked.css';

// TODO: это можно подчистить, ибо я не использую тут размеры
export interface IOfferCardHighRanked {
  discount?: string;
  rank?: string;
  productImg: string;
  productName: string;
  priceDicounted?: string;
  fullPrice?: string;
  button?: React.ReactNode;
  additionalImg?: string;
}

export function OfferCardHighRanked(props: IOfferCardHighRanked) {
  const {
    discount,
    rank,
    productImg,
    productName,
    priceDicounted,
    fullPrice,
    button,
    additionalImg = '',
  } = props;

  const fullPriceClasses = classNames({
    [styles.striked]: priceDicounted,
  });

  return (
    <div className={`${styles.card}`}>
      {discount && (
        <span className={styles.spanDiscount}>{`- ${discount}`}</span>
      )}
      {rank && <RankSpan rank={rank} className={styles.spanRank} />}
      <div className={styles.col}>
        <div className={styles.imgContainer}>
          <img
            src={productImg}
            alt="productImg"
            className={styles.productImg}
          />
        </div>
        <div className={styles.descrContainer}>
          <span className={styles.productName}>{productName}</span>
          <div className={styles.priceRow}>
            {priceDicounted && (
              <span
                className={styles.priceDicounted}
              >{`${priceDicounted}`}</span>
            )}
            {/* REC: Тут просто схалтурил и просто буду копировать цену с руб */}
            <span className={`${styles.fullPrice} ${fullPriceClasses}`}>
              {fullPrice}
            </span>
          </div>
          {button}
        </div>
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

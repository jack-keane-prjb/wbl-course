import classNames from 'classnames';
import React from 'react';
import { RankSpan } from '../RankSpan';
import styles from './offercardhighranked.css';

export interface IOfferCardHighRanked {
  discount?: string;
  rank?: string;
  productImg: string;
  productName: string;
  priceDicounted?: string;
  fullPrice?: string;
  button?: React.ReactNode;
  additionalImg?: string;
  className?: string;
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
    className = '',
  } = props;

  const fullPriceClasses = classNames({
    [styles.striked]: priceDicounted,
  });

  return (
    <div className={`${styles.card} ${className}`}>
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

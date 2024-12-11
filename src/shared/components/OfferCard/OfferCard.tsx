import classNames from 'classnames';
import React from 'react';
import { RankSpan } from '../RankSpan';
import styles from './offercard.css';

type TSpecialOfferCardSizes = '1x' | '2x';
type TSpecialOfferCardHeights = 'small' | '';

export interface ISpecialOfferCard {
  discount?: string;
  rank?: string;
  productImg: string;
  productName: string;
  priceDicounted?: string;
  fullPrice?: string;
  size?: TSpecialOfferCardSizes;
  height?: TSpecialOfferCardHeights;
  button?: React.ReactNode;
  additionalImg?: string;
  className?: string;
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
    height = '',
    button,
    additionalImg = '',
    className = '',
  } = props;

  const cardClasses = classNames(
    styles[`card${size}`],
    styles[`height${height}`]
  );

  const fullPriceClasses = classNames({
    [styles.striked]: priceDicounted,
  });

  return (
    <div className={`${styles.card} ${cardClasses} ${className}`}>
      <div className={styles.container}>
        {discount && (
          <span className={styles.spanDiscount}>{`- ${discount}`}</span>
        )}
        {rank && <RankSpan rank={rank} className={styles.rank} />}
        <div className={`${styles.imgContainer}`}>
          <img
            src={productImg}
            alt="productImg"
            className={styles.productImg}
          />
        </div>
        <div className={styles.col}>
          <span className={styles.productName}>{productName}</span>
          <div className={styles.priceRow}>
            {priceDicounted && (
              <span
                className={styles.priceDicounted}
              >{`${priceDicounted}`}</span>
            )}
            <span className={`${styles.fullPriceSpan} ${fullPriceClasses}`}>
              {fullPrice}
            </span>
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
    </div>
  );
}

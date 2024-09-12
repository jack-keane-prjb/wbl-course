import React from 'react';
import { ButtonText } from '../ButtonText';
import styles from './topcategoriescard.css';

interface ITopCategoriesCard {
  className?: string;
  subcategories?: string[];
  name?: string;
  button?: React.ReactNode;
  img1920?: string;
  img1024?: string;
  img768?: string;
  img320?: string;
  altOfImg?: string;
}

export function TopCategoriesCard(props: ITopCategoriesCard) {
  const {
    className,
    subcategories,
    name = 'Категория',
    img1920,
    img1024 = img1920,
    img768 = img1920,
    img320 = img1920,
    altOfImg = "categoryImg",
  } = props;

  const subcategoriesComponents = subcategories?.map((name) => {
    // const span = <LinkGeneric>{name}</LinkGeneric>;
    const span = <a className={styles.link}>{name}</a>;
    return span;
  });

  // const cardClasses = classNames(styles[`card${size}`]);

  // console.log(size);

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.descrContainer}>
        <div className={styles.subcategories}>{subcategoriesComponents}</div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{name}</h3>
          <ButtonText icon iconSize="small" className={styles.nameBtn} />
        </div>
      </div>
      {/* TODO: Контентное или декоративное? Вроде, контентное. */}
      {/* <div className={styles.imgContainer}> */}
      <picture className={styles.picture}>
        <source srcSet={img1024} media="(max-width: 1599px)" />
        <source srcSet={img768} media="(max-width: 1023px)" />
        <source srcSet={img320} media="(max-width: 767px)" />
        <img src={img1920} alt={altOfImg} className={styles.categoryImg} />
      </picture>
      {/* </div> */}
      {/* <picture>
        <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
        <img src="mdn-logo-narrow.png" alt="MDN" />
      </picture> */}

      <div className={styles.btnContainer}>
        <ButtonText icon iconSize="small" className={styles.btn}>
          В каталог
        </ButtonText>
      </div>
    </div>
  );
}


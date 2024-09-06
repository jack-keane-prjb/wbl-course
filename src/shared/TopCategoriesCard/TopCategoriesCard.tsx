import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { ButtonText } from '../ButtonText';
import styles from './topcategoriescard.css';

type TTopCategoriesCardSizes = '1x' | '2x';

interface ITopCategoriesCard {
  className?: string;
  size1920?: TTopCategoriesCardSizes;
  size1024?: TTopCategoriesCardSizes;
  size768?: TTopCategoriesCardSizes;
  size320?: TTopCategoriesCardSizes;
  subcategories?: string[];
  name?: string;
  img1920?: string;
  img1024?: string;
  img768?: string;
  img320?: string;
  button?: React.ReactNode;
}

export function TopCategoriesCard(props: ITopCategoriesCard) {
  const {
    className,
    size1920 = '1x',
    size1024 = '1x',
    size768 = '1x',
    size320 = '1x',
    subcategories,
    name = 'Категория',
    img1920,
    img1024 = img1920,
    img768 = img1920,
    img320 = img1920,
  } = props;

  const [size, setSize] = useState(size1920);
  const [img, setImg] = useState(img1920);
  // const [btnTxt, setBtnTxt] = useState('В каталог');

  useEffect(() => {
    const rule320px = window.matchMedia(
      '(min-width: 320px) and (max-width: 767px)'
    );
    // TODO: any
    function thingsOn320px(event: any) {
      if (event.matches) {
        setSize(size320);
        setImg(img320);
        // setBtnTxt('');
      }
    }
    rule320px.addEventListener('change', thingsOn320px);
    thingsOn320px(rule320px);

    const rule768px = window.matchMedia(
      '(min-width: 768px) and (max-width: 1023px)'
    );
    // TODO: any
    function thingsOn768px(event: any) {
      if (event.matches) {
        setSize(size768);
        setImg(img768);
      }
    }
    rule768px.addEventListener('change', thingsOn768px);
    thingsOn768px(rule768px);

    const rule1024px = window.matchMedia(
      '(min-width: 1024px) and (max-width: 1599px)'
    );
    // TODO: any
    function thingsOn1024px(event: any) {
      if (event.matches) {
        setSize(size1024);
        setImg(img1024);
      }
    }
    rule1024px.addEventListener('change', thingsOn1024px);
    thingsOn1024px(rule1024px);

    return () => {
      rule320px.removeEventListener('change', thingsOn320px);
      rule768px.removeEventListener('change', thingsOn320px);
      rule1024px.removeEventListener('change', thingsOn320px);
    };
  }, [size1920, size1024, size768, size320, img1024, img768, img320]);

  const subcategoriesComponents = subcategories?.map((name) => {
    // const span = <LinkGeneric>{name}</LinkGeneric>;
    const span = <a className={styles.link}>{name}</a>;
    return span;
  });

  const cardClasses = classNames(styles[`card${size}`]);

  // console.log(size);

  return (
    <div className={`${styles.card} ${cardClasses} ${className}`}>
      <div className={styles.descrContainer}>
        <div className={styles.subcategories}>{subcategoriesComponents}</div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{name}</h3>
          <ButtonText icon iconSize="small" className={styles.nameBtn} />
        </div>
      </div>
      <img className={styles.categoryImg} src={img} alt="categoryImg" />
      <div className={styles.btnContainer}>
        <ButtonText icon iconSize="small" className={styles.btn}>
          В каталог
        </ButtonText>
      </div>
    </div>
  );
}

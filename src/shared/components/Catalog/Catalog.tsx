import React from 'react';
import { ButtonTransparent } from '../ButtonTransparent';
import { OfferCard } from '../OfferCard';
import styles from './catalog.css';

import high_ranked_1_img from '../../../assets/img/high_ranked_1.png';
import high_ranked_2_img from '../../../assets/img/high_ranked_2.png';
import high_ranked_3_img from '../../../assets/img/high_ranked_3.png';
import high_ranked_4_img from '../../../assets/img/high_ranked_4.png';
import high_ranked_5_img from '../../../assets/img/high_ranked_5.png';
import high_ranked_6_img from '../../../assets/img/high_ranked_6.png';
import high_ranked_7_img from '../../../assets/img/high_ranked_7.png';
import high_ranked_8_img from '../../../assets/img/high_ranked_8.png';
import high_ranked_9_img from '../../../assets/img/high_ranked_9.png';
import { Pagination } from '../Pagination';
import { OfferCardHighRanked } from '../OfferCardHighRanked';

export function Catalog() {
  return (
    <section className={`content ${styles.section}`}>
      <h2 className={`sectionTitle ${styles.title}`}>Каталог</h2>
      <div className={`grid ${styles.grid}`}>
        <OfferCardHighRanked
          rank={'5,0'}
          productImg={high_ranked_1_img}
          productName={'Диван кожаный “R-94”'}
          fullPrice={'94 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,9'}
          productImg={high_ranked_2_img}
          productName={'Диван апартековый “T-75”'}
          fullPrice={'69 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,8'}
          productImg={high_ranked_3_img}
          productName={'Диван тканевый “D-31”'}
          fullPrice={'28 490 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,8'}
          productImg={high_ranked_4_img}
          productName={'Диван велюровый “Y-68”'}
          fullPrice={'22 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,8'}
          productImg={high_ranked_5_img}
          productName={'Диван из шинила “W-95”'}
          fullPrice={'22 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,8'}
          productImg={high_ranked_6_img}
          productName={'Диван флоковый “G-41”'}
          fullPrice={'17 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,8'}
          productImg={high_ranked_7_img}
          productName={'Диван шиниловый “V-43”'}
          fullPrice={'19 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,7'}
          productImg={high_ranked_8_img}
          productName={'Диван велюровый “S-99”'}
          fullPrice={'19 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <OfferCardHighRanked
          rank={'4,7'}
          productImg={high_ranked_9_img}
          productName={'Диван из кожзама “F-85”'}
          fullPrice={'26 990 руб'}
          button={<ButtonTransparent text="Купить" />}
        />
        <Pagination />
      </div>
    </section >
  );
}

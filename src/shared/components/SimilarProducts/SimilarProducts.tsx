import React from 'react';
import { ButtonTransparent } from '../ButtonTransparent';
import { Container } from '../Container';
import { OfferCard } from '../OfferCard';
import styles from './similarproducts.css';

import sofa_r85 from '../../../assets/img/sofa_r-85.png';
import sofa_h58 from '../../../assets/img/sofa_h-58.png';
import sofa_s44 from '../../../assets/img/sofa_s-44.png';
import high_ranked_7 from '../../../assets/img/high_ranked_7.png';

export function SimilarProducts({ className = '' }: { className?: string }) {
  return (
    <section className={className}>
      <Container>
        <h2 className={`sectionTitle ${styles.title}`}>Похожие товары</h2>
        <div className={`grid ${styles.grid}`}>
          <OfferCard
            rank={'4,9'}
            productImg={sofa_r85}
            productName={'Диван кожаный “R-94”'}
            fullPrice={'94 990 руб'}
            height="small"
            className={`${styles.card1}`}
            button={<ButtonTransparent text="Купить" className={styles.btn} />}
          />
          <OfferCard
            rank={'5,0'}
            productImg={sofa_h58}
            productName={'Диван кожаный “R-94”'}
            fullPrice={'94 990 руб'}
            height="small"
            className={`${styles.card2}`}
            button={<ButtonTransparent text="Купить" className={styles.btn} />}
          />
          <OfferCard
            rank={'5,0'}
            productImg={sofa_s44}
            productName={'Диван кожаный “R-94”'}
            fullPrice={'94 990 руб'}
            height="small"
            className={`${styles.card3}`}
            button={<ButtonTransparent text="Купить" className={styles.btn} />}
          />
          <OfferCard
            rank={'5,0'}
            productImg={high_ranked_7}
            productName={'Диван кожаный “R-94”'}
            fullPrice={'94 990 руб'}
            height="small"
            className={`${styles.card4}`}
            button={<ButtonTransparent text="Купить" className={styles.btn} />}
          />
        </div>
      </Container>
    </section>
  );
}

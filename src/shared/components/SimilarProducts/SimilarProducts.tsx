import React from 'react';
import { ButtonTransparent } from '../ButtonTransparent';
import { Container } from '../Container';
import { OfferCard } from '../OfferCard';
// import styles from './similarproducts.css';

import sofa_r85 from '../../../assets/img/sofa_r-85.png';
import sofa_h58 from '../../../assets/img/sofa_h-58.png';
import sofa_s44 from '../../../assets/img/sofa_s-44.png';
import high_ranked_7 from '../../../assets/img/high_ranked_7.png';

export function SimilarProducts() {
  return (
    <Container className="grid">
      <h2 className="sectionTitle">Похожие товары</h2>
      <OfferCard
        rank={'5,0'}
        productImg={sofa_r85}
        productName={'Диван кожаный “R-94”'}
        fullPrice={'94 990 руб'}
        button={<ButtonTransparent text="Купить" />}
      />
      <OfferCard
        rank={'5,0'}
        productImg={sofa_h58}
        productName={'Диван кожаный “R-94”'}
        fullPrice={'94 990 руб'}
        button={<ButtonTransparent text="Купить" />}
      />
      <OfferCard
        rank={'5,0'}
        productImg={sofa_s44}
        productName={'Диван кожаный “R-94”'}
        fullPrice={'94 990 руб'}
        button={<ButtonTransparent text="Купить" />}
      />
      <OfferCard
        rank={'5,0'}
        productImg={high_ranked_7}
        productName={'Диван кожаный “R-94”'}
        fullPrice={'94 990 руб'}
        button={<ButtonTransparent text="Купить" />}
      />
    </Container>
  );
}

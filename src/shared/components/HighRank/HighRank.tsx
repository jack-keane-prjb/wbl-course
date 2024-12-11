import React from 'react';
import { Container } from '../Container';
import styles from './highrank.css';

import high_ranked_1_img from '../../../assets/img/high_ranked_1.png';
import high_ranked_2_img from '../../../assets/img/high_ranked_2.png';
import high_ranked_3_img from '../../../assets/img/high_ranked_3.png';
import high_ranked_4_img from '../../../assets/img/high_ranked_4.png';
import high_ranked_5_img from '../../../assets/img/high_ranked_5.png';
import high_ranked_6_img from '../../../assets/img/high_ranked_6.png';
import high_ranked_7_img from '../../../assets/img/high_ranked_7.png';
import high_ranked_8_img from '../../../assets/img/high_ranked_8.png';

import { ButtonTransparent } from '../ButtonTransparent';
import { OfferCardHighRanked } from '../OfferCardHighRanked';
import useWindowSizeMediaQuery from '../../../utils/js/hooks/useWindowSizeMediaQuery';

export function HighRank({ className }: { className?: string }) {
  const is768px = useWindowSizeMediaQuery(
    '(min-width: 320px) and (max-width: 767px)'
  );
  const is1920px = useWindowSizeMediaQuery('(min-width: 1600px)');

  return (
    <section>
      <Container>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>
          Высокий рейтинг
        </h2>
        <div className={`grid ${styles.grid}`}>
          <OfferCardHighRanked
            rank={'5,0'}
            productImg={high_ranked_1_img}
            productName={'Диван кожаный \n “R-94”'}
            fullPrice={'94 990 руб'}
            button={
              <ButtonTransparent size={is768px ? 'small' : ''} text="Купить" />
            }
          />
          <OfferCardHighRanked
            rank={'4,9'}
            productImg={high_ranked_2_img}
            productName={'Диван апартековый \n “T-75”'}
            fullPrice={'69 990 руб'}
            button={
              <ButtonTransparent size={is768px ? 'small' : ''} text="Купить" />
            }
          />
          <OfferCardHighRanked
            rank={'4,8'}
            productImg={high_ranked_3_img}
            productName={'Диван тканевый \n “D-31”'}
            fullPrice={'28 490 руб'}
            button={
              <ButtonTransparent size={is768px ? 'small' : ''} text="Купить" />
            }
          />
          <OfferCardHighRanked
            rank={'4,8'}
            productImg={high_ranked_4_img}
            productName={'Диван велюровый \n “Y-68”'}
            fullPrice={'22 990 руб'}
            button={
              <ButtonTransparent size={is768px ? 'small' : ''} text="Купить" />
            }
          />
          <OfferCardHighRanked
            rank={'4,8'}
            productImg={high_ranked_5_img}
            productName={'Диван из шинила \n “W-95”'}
            fullPrice={'22 990 руб'}
            button={
              <ButtonTransparent size={is768px ? 'small' : ''} text="Купить" />
            }
          />
          <OfferCardHighRanked
            rank={'4,8'}
            productImg={high_ranked_6_img}
            productName={'Диван флоковый \n “G-41”'}
            fullPrice={'17 990 руб'}
            button={
              <ButtonTransparent size={is768px ? 'small' : ''} text="Купить" />
            }
          />

          {is1920px && (
            <>
              <OfferCardHighRanked
                rank={'4,8'}
                productImg={high_ranked_7_img}
                productName={'Диван шиниловый \n “V-43”'}
                fullPrice={'19 990 руб'}
                button={
                  <ButtonTransparent
                    size={is768px ? 'small' : ''}
                    text="Купить"
                  />
                }
              />
              <OfferCardHighRanked
                rank={'4,7'}
                productImg={high_ranked_8_img}
                productName={'Диван велюровый \n “S-99”'}
                fullPrice={'19 990 руб'}
                button={
                  <ButtonTransparent
                    size={is768px ? 'small' : ''}
                    text="Купить"
                  />
                }
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { Container } from '../Container';
import { OfferCard } from '../OfferCard';
import styles from './specialoffers.css';

import special_offer_1_img from '../../../assets/img/special_offer_1.png';
import special_offer_2_img from '../../../assets/img/special_offer_2.png';
import special_offer_2_2_img from '../../../assets/img/special_offer_2_2.png';
import special_offer_3_img from '../../../assets/img/special_offer_3.png';
import special_offer_4_img from '../../../assets/img/special_offer_4.png';
import special_offer_5_img from '../../../assets/img/special_offer_5.png';
import special_offer_6_img from '../../../assets/img/special_offer_6.png';

import { ButtonTransparent } from '../ButtonTransparent';
import useWindowSizeMediaQuery from '../../../utils/js/hooks/useWindowSizeMediaQuery';

export function SpecialOffers({ className }: { className?: string }) {
  // REC: правильная обработка media queries в react:

  const is320px = useWindowSizeMediaQuery('(min-width: 320px) and (max-width: 767px)')
  const is768px = useWindowSizeMediaQuery('(min-width: 768px) and (max-width: 1023px)')


  return (
    <section className={`${className}`}>
      <Container>
        {/* REC:  вообще для заголовков комонет текст - ну такое себе */}
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>
          Специальные предложения
        </h2>
        <div className={`grid ${styles.grid}`}>
          <OfferCard
            discount="9 000"
            productImg={special_offer_1_img}
            productName={'Кресло велюровое “X-24”'}
            priceDicounted="15 990 руб"
            fullPrice="24 990 руб"
            button={<ButtonTransparent text="Купить" />}
          />
          <OfferCard
            discount="10 000"
            productImg={special_offer_2_img}
            productName={'Диван тканевый “Z-44”'}
            priceDicounted="22 990 руб"
            fullPrice="32 990 руб"
            size={'2x'}
            button={<ButtonTransparent text="Купить" />}
            additionalImg={special_offer_2_2_img}
          />
          {/* REC: это надо читать, как "на 768 не будет выводиться эта карточка"*/}
          {!is768px && (
            <OfferCard
              discount="600"
              productImg={special_offer_3_img}
              productName={'Будильник  “Quartz-23”'}
              priceDicounted="1 290 руб"
              fullPrice="1 890 руб"
              button={<ButtonTransparent text="Купить" />}
            />
          )}
          {is320px && (
            <>
              <OfferCard
                discount="300"
                productImg={special_offer_4_img}
                productName={'Мини-скульптура “Oh my deer”'}
                priceDicounted="690 руб"
                fullPrice="990 руб"
                button={<ButtonTransparent text="Купить" />}
              />
              <OfferCard
                discount="10 000"
                productImg={special_offer_5_img}
                productName={'Диван вел-флок “Z-85”'}
                priceDicounted="22 990 руб"
                fullPrice="32 900 руб"
                button={<ButtonTransparent text="Купить" />}
              />
              <OfferCard
                discount="700"
                productImg={special_offer_6_img}
                productName={'Термометр + гидрометр “H-18”'}
                priceDicounted="1 390 руб"
                fullPrice="2 090 руб"
                button={<ButtonTransparent text="Купить" />}
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

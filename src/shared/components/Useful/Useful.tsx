import React, { useEffect, useState } from 'react';
import { Container } from '../Container';
import { UsefulСard } from '../UsefulСard';
import styles from './useful.css';

import img_article_1 from '../../../assets/img/article_1.jpg';
import img_article_2 from '../../../assets/img/article_2.jpg';
import img_article_3 from '../../../assets/img/article_3.jpg';
import img_article_4 from '../../../assets/img/article_4.jpg';
import img_article_5 from '../../../assets/img/article_5.jpg';
import classNames from 'classnames';
import useWindowSizeMediaQuery from '../../../utils/js/hooks/useWindowSizeMediaQuery';

export function Useful({ className }: { className?: string }) {
  const is1920px = useWindowSizeMediaQuery('(min-width: 1600px)');
  const is1024px = useWindowSizeMediaQuery('(min-width: 1024px) and (max-width: 1599px)');
  const is768px = useWindowSizeMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const is320px = useWindowSizeMediaQuery('(max-width: 767px)');


  return (
    <section>
      <Container>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>Полезное</h2>
        <div className={`grid ${styles.grid}`}>
          {/* 1920px */}
          <UsefulСard className={styles.card1}
            img={img_article_1}
            text="И нет сомнений, что сделанные на базе интернет-аналитики выводы представляют собой не что иное?"
          />
          <UsefulСard className={styles.card2}
            img={img_article_2}
            text="Как принято считать, некоторые особенности приносят несомненную пользу обществу?"
          />

          {is1920px && <>
            {/* <UsefulСard className={styles.card3}
              img={img_article_3}
              text="Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры?"
            />
            <UsefulСard className={styles.card4}
              img={img_article_4}
              text="Прежде всего, консультация с широким активом однозначно фиксирует необходимость распределения?"
            />
            <UsefulСard className={styles.card5}
              img={img_article_5}
              text="Как принято считать, некоторые особенности приносят несомненную пользу обществу?"
            /> */}
          </>}

          {is1024px && <>
            {/* 1024px */}
            <UsefulСard className={styles.card3}
              img={img_article_3}
              text="Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры?"
            />
          </>}


          {is320px && (
            <>
              <UsefulСard
                img={img_article_3}
                text="Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры?"
              />
              <UsefulСard
                img={img_article_4}
                text="Прежде всего, консультация с широким активом однозначно фиксирует необходимость распределения?"
              />
              <UsefulСard
                img={img_article_5}
                text="Как принято считать, некоторые особенности приносят несомненную пользу обществу?"
              />
            </>
          )}


        </div>
      </Container >
    </section >
  );
}

import React, { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { UsefulСard } from '../components/UsefulСard';
import styles from './useful.css';

import img_article_1 from '../../assets/img/article_1.jpg';
import img_article_2 from '../../assets/img/article_2.jpg';
import img_article_3 from '../../assets/img/article_3.jpg';
import img_article_4 from '../../assets/img/article_4.jpg';
import img_article_5 from '../../assets/img/article_5.jpg';
import classNames from 'classnames';

export function Useful({ className }: { className: string }) {
  const [is320px, setIs320px] = useState(false);
  const [is768px, setIs768px] = useState(false);

  useEffect(() => {
    const rule320px = window.matchMedia(
      '(min-width: 320px) and (max-width: 767px)'
    );
    // TODO: any
    function thingsOn320px(event: any) {
      event.matches ? setIs320px(true) : setIs320px(false);
    }
    rule320px.addEventListener('change', thingsOn320px);

    // REC: запускаю один раз сразу. Это нужно для корректного срабатывания сразу на 320пкс.
    thingsOn320px(rule320px);

    const rule768px = window.matchMedia(
      '(min-width: 768px) and (max-width: 1023px)'
    );
    // TODO: any
    function thingsOn768px(event: any) {
      event.matches ? setIs768px(true) : setIs768px(false);
    }
    rule768px.addEventListener('change', thingsOn768px);

    // REC: запускаю один раз сразу. Это нужно для корректного срабатывания сразу на 320пкс.
    thingsOn768px(rule768px);

    return () => {
      rule320px.removeEventListener('change', thingsOn320px);
      rule768px.removeEventListener('change', thingsOn768px);
    };
  }, []);

  return (
    <div className={className}>
      <h2 className={`sectionTitle ${styles.sectionTitle}`}>Полезное</h2>
      <div className={`gridContainer ${styles.grid}`}>
        {/* 1920px */}
        <UsefulСard className={styles.card1}
          img={img_article_1}
          text="И нет сомнений, что сделанные на базе интернет-аналитики выводы представляют собой не что иное?"
        />
        <UsefulСard className={styles.card2}
          img={img_article_2}
          text="Как принято считать, некоторые особенности приносят несомненную пользу обществу?"
        />


        {/* 1024px */}
        <UsefulСard className={styles.card3}
          img={img_article_3}
          text="Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры?"
        />

        {/* 320px */}
        <UsefulСard className={styles.card4}
          img={img_article_4}
          text="Прежде всего, консультация с широким активом однозначно фиксирует необходимость распределения?"
        />
        <UsefulСard className={styles.card5}
          img={img_article_5}
          text="Как принято считать, некоторые особенности приносят несомненную пользу обществу?"
        />




        {/* {is320px && (
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
        )} */}


      </div>
    </div>
  );
}

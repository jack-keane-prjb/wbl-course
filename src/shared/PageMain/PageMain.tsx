import React from 'react';
import { Header } from '../Header';
import { Hero } from '../Hero';
import styles from './pagemain.css';

import hero1_1920px from '../../assets/img/hero1_1920px.jpg';
import hero1_1024px from '../../assets/img/1024px/hero1_1024px.jpg';
import hero1_768px from '../../assets/img/768px/hero1_768px.jpg';
import hero1_320px from '../../assets/img/320px/hero1_320px.jpg';
import { SpecialOffers } from '../SpecialOffers';
import { Container } from '../Container';
import { HighRank } from '../HighRank';
// import { SpecialOffers } from '../SpecialOffers';
// import { HighRank } from '../HighRank';
import { Hero2 } from '../Hero2';

import hero2_1920px from '../../assets/img/hero2_1920px.jpg';
import hero2_1024px from '../../assets/img/1024px/hero2_1024px.jpg';
import hero2_768px from '../../assets/img/768px/hero2_768px.jpg';
import hero2_320px from '../../assets/img/320px/hero2_320px.jpg';
import { TopCategories } from '../TopCategories';
// import { Feedback } from '../Feedback';
// import { TopCategories } from '../TopCategories';
// import { Useful } from '../Useful';
// import { Footer } from '../Footer';

export function PageMain() {
  return (
    // TODO: Возможно удалить layout, ибо он ничего в данном случае не делает.
    <>
      <Header />
      {/* REC: убрал Content в пользу обычного main */}
      {/* <Content> */}
      <main>
        <Hero
          backgroundImg1920={hero1_1920px}
          backgroundImg1024={hero1_1024px}
          backgroundImg768={hero1_768px}
          backgroundImg320={hero1_320px}
        />
        {/* TODO: тут бы секцию в глобал отнести. А править конерктно для этих двух компонентов */}
        {/* Пробую изменить на Container с классом section */}
        {/* <div className={`${styles.section} ${styles.sectionSome}`}> */}
        <Container className={`${styles.section} ${styles.sectionSome}`}>
          <SpecialOffers className={styles.specialoffers} />
          <HighRank className={styles.highrank} />
        </Container>
        {/* </div> */}
        <Hero2
          backgroundImg1920={hero2_1920px}
          backgroundImg1024={hero2_1024px}
          backgroundImg768={hero2_768px}
          backgroundImg320={hero2_320px}
        />
        {/* TODO: разобарться получше с классами для секций */}
        {/* HERE: тут остановился */}
        <div className={styles.section2}>
          <TopCategories />
          {/* <Useful /> */}
          {/* <Feedback /> */}
        </div>
      </main>
      {/* </Content> */}
      {/* <Footer /> */}
      {/* <Copyright /> */}
    </>
  );
}

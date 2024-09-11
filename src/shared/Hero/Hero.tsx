import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import styles from './hero.css';

export interface IHero {
  backgroundImg1920?: string;
  backgroundImg1024?: string;
  backgroundImg768?: string;
  backgroundImg320?: string;
}

export function Hero(props: IHero) {
  const {
    backgroundImg1920,
    backgroundImg1024,
    backgroundImg768,
    backgroundImg320,
  } = props;



  // REC: так делаю для того, чтобы вставить перенос. Ибо если просто перенести строку даже с (prettier-ignore), то ничего не выйдет. Где-то, видимо, что-то форматирует текст.
  const headerText = 'Скидка 15% \n на первую покупку';

  console.log('heroBackgroundStyle', heroBackgroundStyle);

  return (
    <section className={styles.hero} style={heroBackgroundStyle}>
      <Container className={styles.container}>
        {/* prettier-ignore */}
        <h2 className={styles.h2}>{headerText}</h2>
        <Button className={styles.btn}>Получить!</Button>
      </Container>
      {/* Тут, возможно, будут сдвиги на 320пкс */}
      {/* <Button className={styles.btn}>Получить!</Button> */}
    </section>
  );
}

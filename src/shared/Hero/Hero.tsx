import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import styles from './hero.css';



export function Hero() {




  // REC: так делаю для того, чтобы вставить перенос. Ибо если просто перенести строку даже с (prettier-ignore), то ничего не выйдет. Где-то, видимо, что-то форматирует текст.
  const headerText = 'Скидка 15% \n на первую покупку';

  return (
    <section className={styles.hero}>
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

import React from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import styles from './hero.css';

export function Hero({ className = '' }: { className?: string }) {
  const headerText = 'Скидка 15% \n на первую покупку';
  return (
    <section className={`${className} ${styles.section}`}>
      <Container className={styles.container}>
        <h2 className={styles.h2}>{headerText}</h2>
        <Button className={styles.btn}>Получить!</Button>
      </Container>
    </section>
  );
}

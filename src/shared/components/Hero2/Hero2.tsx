import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import styles from './hero2.css';

export function Hero2({ className = "" }: { className?: string }) {

  return (
    <section className={`${className} ${styles.section}`}>
      <Container className={styles.container}>
        <h2 className={styles.h2}>Оксфорд 1950</h2>
        <h3 className={styles.h3}>Новая коллекция изысканных кресел </h3>
        <Button className={styles.btn}>Ознакомиться</Button>
      </Container>
    </section>
  );
}

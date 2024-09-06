import React from 'react';
import { Catalog } from '../Catalog';
import { Container } from '../Container';
import { Copyright } from '../Copyright';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';

import styles from './pagecatalog.css';

// REC: остановился на том, что нужно придумать, как сделать контейнер для сайдбара и мэйна, сохранив структуру сетки.

export function PageCatalog() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>
          <NavBar />
        </Container>
        <Container className={styles.grid}>
          <SideBar />
          <Catalog />
        </Container>
      </main>
      <Footer />
      <Copyright />
    </>
  );
}

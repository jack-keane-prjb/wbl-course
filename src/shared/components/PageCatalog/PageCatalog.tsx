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
      <Header className={styles.header} />
      <main className={styles.main}>
        <NavBar />
        <Container>
          <div className={`${styles.grid}`}>
            <SideBar className={styles.sidebar} />
            <Catalog className={styles.content} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

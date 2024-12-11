import React from 'react';
import { Catalog } from '../Catalog';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';

import styles from './pagecatalog.css';

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

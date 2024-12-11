import React from 'react';
import { Container } from '../Container';
import { Copyright } from '../Copyright';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ItemInfo } from '../ItemInfo';
import { ItemDescr } from '../ItemDescr';
import { ItemTags } from '../ItemTags';
import { NavBar } from '../NavBar';
import { SimilarProducts } from '../SimilarProducts';
import styles from './pageitem.css';
import { ItemSection } from '../ItemSection';



export function PageItem() {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.main}>
        <NavBar className={styles.NavBar}>{["D 31"]}</NavBar>
        <ItemSection className={styles.section} />
        <SimilarProducts className={styles.section} />
      </main>
      <Footer />
    </>
  );
}

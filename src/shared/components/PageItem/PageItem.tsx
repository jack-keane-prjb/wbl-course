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

export function PageItem() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>
          <NavBar />
        </Container>
        {/* TODO: как лучше делать: каждый компонет пихать в контейнер, или отдельно контейнер прописывать? */}
        <Container className="gridContainer">
          <ItemInfo />
          <ItemDescr />
          <ItemTags />
        </Container>
        <SimilarProducts />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}

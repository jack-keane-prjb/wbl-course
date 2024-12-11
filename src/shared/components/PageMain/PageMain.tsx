import React from 'react';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { Hero2 } from '../Hero2';

import { Footer } from '../Footer';
import { PageMainGroup1 } from '../PageMainGroup1';
import { PageMainGroup2 } from '../PageMainGroup2';

export function PageMain() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <PageMainGroup1 />
        <Hero2 />
        <PageMainGroup2 />
      </main>
      <Footer />
    </>
  );
}

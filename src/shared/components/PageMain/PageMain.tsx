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
      {/* REC: удалил компонент Main, ибо main есть на каждой странице. */}
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

{
  /* TODO: разобарться получше с классами для секций */
}
{
  /* TODO: тут бы секцию в глобал отнести. А править конерктно для этих двух компонентов */
}

{
  /* REC: убрал Content в пользу обычного main */
}
{
  /* <Content> */
}

// TODO: Возможно удалить layout, ибо он ничего в данном случае не делает.

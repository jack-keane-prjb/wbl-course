import React, { useEffect, useState } from 'react';
import { Container } from '../Container';
import { FeedbackForm } from '../FeedbackForm';
import styles from './feedback.css';
import useWindowSizeMediaQuery from '../../../utils/js/hooks/useWindowSizeMediaQuery';

// TODO: поправить везде вертикальный зазор в сетке. он не 26 пикс. Это отступ только для заголовков.

export function Feedback({ className }: { className: string }) {

  const is320px = useWindowSizeMediaQuery('(max-width: 767px)');

  return (
    <section className={className}>
      <Container>
        <h2 className={`sectionTitle ${styles.title}`}>Мы всегда вам рады!</h2>
        <div className={`grid ${styles.grid}`}>
          <FeedbackForm />
          {!is320px && <div className={styles.backgroundCell}></div>}
        </div>
      </Container>
    </section>
  );
}

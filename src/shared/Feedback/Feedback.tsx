import React from 'react';
import { Container } from '../Container';
import { FeedbackForm } from '../FeedbackForm';
import styles from './feedback.css';

// TODO: поправить везде вертикальный зазор в сетке. он не 26 пикс. Это отступ только для заголовков.

export function Feedback() {
  return (
    <Container className={`section ${styles.container}`}>
      <div className={`gridContainer ${styles.grid}`}>
        <h2 className={`sectionTitle ${styles.title}`}>Мы всегда вам рады!</h2>
        <FeedbackForm />
        <div className={styles.backgroundCell}></div>
      </div>
    </Container>
  );
}

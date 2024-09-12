import React from 'react';
import { Container } from '../Container';
import { FeedbackForm } from '../FeedbackForm';
import styles from './feedback.css';

// TODO: поправить везде вертикальный зазор в сетке. он не 26 пикс. Это отступ только для заголовков.

export function Feedback({ className }: { className: string }) {
  return (
    <div className={className}>
      <h2 className={`sectionTitle ${styles.title}`}>Мы всегда вам рады!</h2>
      <div className={`gridContainer ${styles.grid}`}>
        <FeedbackForm />
        <div className={styles.backgroundCell}></div>
      </div>
    </div>
  );
}

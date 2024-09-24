import React, { useEffect, useState } from 'react';
import { Container } from '../Container';
import { FeedbackForm } from '../FeedbackForm';
import styles from './feedback.css';

// TODO: поправить везде вертикальный зазор в сетке. он не 26 пикс. Это отступ только для заголовков.

export function Feedback({ className }: { className: string }) {

  const [is320px, setIs320px] = useState(false);
  const [is768px, setIs768px] = useState(false);

  useEffect(() => {
    const rule320px = window.matchMedia(
      // TODO: возможно, так корректнее работает:
      '(max-width: 767px)'
      // '(min-width: 320px) and (max-width: 767px)'
    );
    // TODO: any
    function thingsOn320px(event: any) {
      event.matches ? setIs320px(true) : setIs320px(false);
    }
    rule320px.addEventListener('change', thingsOn320px);

    // REC: запускаю один раз сразу. Это нужно для корректного срабатывания сразу на 320пкс.
    thingsOn320px(rule320px);

    const rule768px = window.matchMedia(
      '(min-width: 768px) and (max-width: 1023px)'
    );
    // TODO: any
    function thingsOn768px(event: any) {
      event.matches ? setIs768px(true) : setIs768px(false);
    }
    rule768px.addEventListener('change', thingsOn768px);

    // REC: запускаю один раз сразу. Это нужно для корректного срабатывания сразу на 320пкс.
    thingsOn768px(rule768px);

    return () => {
      rule320px.removeEventListener('change', thingsOn320px);
      rule768px.removeEventListener('change', thingsOn768px);
    };
  }, []);

  return (
    <div className={className}>
      <h2 className={`sectionTitle ${styles.title}`}>Мы всегда вам рады!</h2>
      <div className={`gridContainer ${styles.grid}`}>
        <FeedbackForm />
        {!is320px && <div className={styles.backgroundCell}></div>}
      </div>
    </div>
  );
}

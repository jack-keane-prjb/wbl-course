import React from 'react';
import { ButtonPagination } from '../ButtonPagination';
import styles from './pagination.css';

export function Pagination() {
  return (
    <div className={styles.pagination}>
      <ButtonPagination current />
      <ButtonPagination text="2" />
    </div>
  );
}

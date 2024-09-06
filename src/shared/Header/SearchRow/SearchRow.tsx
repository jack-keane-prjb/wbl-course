import React from 'react';
import { ButtonText } from '../../ButtonText';
import { Container } from '../../Container';
import { Icon } from '../../Icon';
import { UserBtns } from '../../UserBtns';
import styles from './searchrow.css';

export function SearchRow() {
  return (
    <Container className={styles.container}>
      <form className={styles.searchForm}>
        <input
          className={styles.input}
          type="text"
          placeholder="Я хочу купить..."
          // required
        />
        <Icon ico="search" className={styles.searchIco}></Icon>
        <ButtonText icon className={styles.btn}></ButtonText>
      </form>
      <UserBtns className={styles.UserBtns} />
    </Container>
  );
}

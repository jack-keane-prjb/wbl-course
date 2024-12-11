import React from 'react';

import styles from './FooterLinks.css';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { SocialLink } from '../SocialLink';

export interface FooterLinksProps {
  prop?: string;
}

export function FooterLinks() {
  return (
    <section className={styles.sectionLinks}>
      <Container className={styles.containerLinks}>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logoLink}>
            <Icon ico="logo"></Icon>
          </a>
          <div className={styles.socialLinksContainer}>
            <SocialLink
              className={styles.socialLink}
              ico="social_ok"
            ></SocialLink>
            <SocialLink ico="social_vk"></SocialLink>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.linksContainerRow}>
            <h4 className={styles.h4}>О нас</h4>
            <a href="#" className={styles.a}>
              О компании
            </a>
            <a href="#" className={styles.a}>
              Блог
            </a>
          </div>
          <div className={styles.linksContainerRow}>
            <h4 className={styles.h4}>Услуги</h4>
            <a href="#" className={styles.a}>
              Доставка
            </a>
            <a href="#" className={styles.a}>
              Рассрочка и кредит
            </a>
            <a href="#" className={styles.a}>
              Сборка и установка
            </a>
          </div>
          <div className={styles.linksContainerRow}>
            <h4 className={styles.h4}>Связь с нами</h4>
            <a href="#" className={styles.a}>
              Обратная связь
            </a>
            <a href="#" className={styles.a}>
              Контакты
            </a>
          </div>
          <div className={styles.linksContainerRow}>
            <h4 className={styles.h4}>Сотрудничество</h4>
            <a href="#" className={styles.a}>
              Поставщикам
            </a>
            <a href="#" className={styles.a}>
              Оптовикам
            </a>
            <a href="#" className={styles.a}>
              Карьера
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

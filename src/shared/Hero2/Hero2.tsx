import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import styles from './hero2.css';

export interface IHero2 {
  backgroundImg1920?: string;
  backgroundImg1024?: string;
  backgroundImg768?: string;
  backgroundImg320?: string;
  className?: string;
}

export function Hero2(props: IHero2) {
  const {
    backgroundImg1920 = '',
    backgroundImg1024 = backgroundImg1920,
    backgroundImg768 = backgroundImg1920,
    backgroundImg320 = backgroundImg1920,
    className,
  } = props;

  // TODO: вынести код из двух хиро отдельно:

  const [heroBackgroundStyle, setHeroBackgroundStyle] = useState({
    backgroundImage: 'url(' + backgroundImg1920 + ')',
  });
  // REC: вот тут (на данный момент) самая правильная обработка медиа-запросов.
  useEffect(() => {
    const rule320px = window.matchMedia(
      '(min-width: 320px) and (max-width: 767px)'
    );
    // TODO: any
    function thingsOn320px(event: any) {
      if (event.matches) {
        console.log('rule 320 fired');
        setHeroBackgroundStyle({
          backgroundImage: 'url(' + backgroundImg320 + ')',
        });
      }
      // else
      //   setHeroBackgroundStyle({
      //     backgroundImage: 'url(' + backgroundImg768 + ')',
      //   });
    }
    rule320px.addEventListener('change', thingsOn320px);
    // REC: это запуск первой проверки для установки правильного изображения.
    thingsOn320px(rule320px);

    const rule768px = window.matchMedia(
      '(min-width: 768px) and (max-width: 1023px)'
    );
    // TODO: any
    function thingsOn768px(event: any) {
      if (event.matches) {
        console.log('rule 768 fired');
        setHeroBackgroundStyle({
          backgroundImage: 'url(' + backgroundImg768 + ')',
        });
      }
      // else
      //   setHeroBackgroundStyle({
      //     backgroundImage: 'url(' + backgroundImg1024 + ')',
      //   });
    }
    rule768px.addEventListener('change', thingsOn768px);
    thingsOn768px(rule768px);

    const rule1024px = window.matchMedia(
      '(min-width: 1024px) and (max-width: 1599px)'
    );
    // TODO: any
    function thingsOn1024px(event: any) {
      if (event.matches) {
        console.log('rule 1024 fired');
        setHeroBackgroundStyle({
          backgroundImage: 'url(' + backgroundImg1024 + ')',
        });
      }
      // else
      //   setHeroBackgroundStyle({
      //     backgroundImage: 'url(' + backgroundImg1920 + ')',
      //   });
    }
    rule1024px.addEventListener('change', thingsOn1024px);
    thingsOn1024px(rule1024px);

    const rule1920px = window.matchMedia(
      // REC: использование диапазаона позволяет не использовать else (а он, в свою очередь, приводи к ошибкам и усложенению кода)
      '(min-width: 1600px) and (max-width: 1920px)'
    );
    // TODO: any
    function thingsOn1920px(event: any) {
      if (event.matches) {
        console.log('rule 1920 fired');
        setHeroBackgroundStyle({
          backgroundImage: 'url(' + backgroundImg1920 + ')',
        });
      }
      // else
      //   setHeroBackgroundStyle({
      //     backgroundImage: 'url(' + backgroundImg1920 + ')',
      //   });
    }
    rule1920px.addEventListener('change', thingsOn1920px);
    thingsOn1920px(rule1920px);

    return () => {
      rule320px.removeEventListener('change', thingsOn320px);
      rule768px.removeEventListener('change', thingsOn768px);
      rule1024px.removeEventListener('change', thingsOn1024px);
    };
  }, [
    backgroundImg1920,
    backgroundImg1024,
    backgroundImg768,
    backgroundImg320,
  ]);

  // console.log('heroBackgroundStyle', heroBackgroundStyle);

  return (
    <section
      className={`${styles.hero} ${className}`}
      style={heroBackgroundStyle}
    >
      <Container className={styles.container}>
        <h2 className={styles.h2}>Оксфорд 1950</h2>
        <h3 className={styles.h3}>Новая коллекция изысканных кресел </h3>
        <Button className={styles.btn}>Ознакомиться</Button>
      </Container>
    </section>
  );
}

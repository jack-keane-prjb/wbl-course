import React from 'react';
import { Container } from '../Container';
import { TopCategoriesCard } from '../TopCategoriesCard';
import styles from './topcategories.css';

// TODO: Выполнить проверку дубликатов на ассеты тут:

import imgSofas from '../../../assets/img/top_cat_sofas.png';
import imgSofas1024 from '../../../assets/img/1024px/top_cat_sofas_1024px.png';
import imgSofas320 from '../../../assets/img/320px/top_cat_sofas_320px.png';

import imgArmchairs from '../../../assets/img/top_cat_armchairs.png';
import imgArmchairs1024 from '../../../assets/img/1024px/top_cat_armchairs_1024px.png';
import imgArmchairs768 from '../../../assets/img/768px/top_cat_armchairs_768px.png';
import imgArmchairs320 from '../../../assets/img/320px/top_cat_armchairs_320px.png';

import imgBeds from '../../../assets/img/top_cat_beds.png';
import imgBeds1024 from '../../../assets/img/1024px/top_cat_beds_1024px.png';
import imgBeds768 from '../../../assets/img/768px/top_cat_beds_768px.png';
import imgBeds320 from '../../../assets/img/320px/top_cat_beds_320px.png';

import imgChests from '../../../assets/img/top_cat_chests.png';
import imgChests1024 from '../../../assets/img/1024px/top_cat_chests_1024px.png';
import imgChests768 from '../../../assets/img/768px/top_cat_chests_768px.png';
import imgChests320 from '../../../assets/img/320px/top_cat_chests_320px.png';

import imgChairs from '../../../assets/img/top_cat_chairs.png';
import imgChairs1024 from '../../../assets/img/1024px/top_cat_chairs_1024px.png';
import imgChairs768 from '../../../assets/img/768px/top_cat_chairs_768px.png';
import imgChairs320 from '../../../assets/img/320px/top_cat_chairs_320px.png';

export function TopCategories({ className }: { className?: string }) {
  return (
    <section>
      <Container>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>Топ категории</h2>
        <div className={`grid ${styles.grid}`}>


          {/* TODO: возможно, стоит пересмотреть изменение размеров карточки через JS. Ибо нашелся вариант намного */}
          {/* Итого: вместо всей это кучи атрибутов (пропсов) я буду прописывать один класс. Так намного проще*/}
          <TopCategoriesCard
            className={`${styles.card} ${styles.card1}`}
            subcategories={['Прямые', 'Угловые', 'Модульные']}
            name="Диваны"
            img1920={imgSofas}
            img1024={imgSofas1024}
            //TODO: Тут либо картинка не соответствует действительности, либо ее надо растянуть.
            img320={imgSofas320}
          />
          <TopCategoriesCard
            className={`${styles.card} ${styles.card2}`}
            subcategories={['Мягкие', 'Кресла-кровати']}
            name="Кресла"
            img1920={imgArmchairs}
            img1024={imgArmchairs1024}
            img768={imgArmchairs768}
            img320={imgArmchairs320}
            size='small'
          />
          <TopCategoriesCard
            className={`${styles.card} ${styles.card3}`}
            subcategories={['Односпальные', 'Двуспальные']}
            name="Кровати"
            img1920={imgBeds}
            img1024={imgBeds1024}
            img768={imgBeds768}
            img320={imgBeds320}
            size='small'
          />
          <TopCategoriesCard
            className={`${styles.card} ${styles.card4}`}
            subcategories={['Тумбы', 'Комоды']}
            name="Тумбы и комоды"
            img1920={imgChests}
            img1024={imgChests1024}
            img768={imgChests768}
            img320={imgChests320}
            size='small'
          />
          <TopCategoriesCard
            className={`${styles.card} ${styles.card5}`}
            subcategories={['Деревянные', 'Металлокаркас']}
            name="Стулья"
            img1920={imgChairs}
            img1024={imgChairs1024}
            img768={imgChairs768}
            img320={imgChairs320}
            size='small'
          />
        </div>
      </Container>
    </section>
  );
}


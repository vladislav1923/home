import { SyntheticEvent } from 'react';
import styles from './price.module.scss';
import { Title } from '../Title';
import { Card, PriceCard } from '../Card';
import { Anchor } from '../../ui-kit/Anchor';

export function Price() {
  return (
    <>
      <div className={styles.title}>
        <Title title="Стоимость" />
      </div>
      <ul className={styles.cardsList}>
        <li className={styles.cardScale}>
          <Card flagTitle="Таргетированные SMS-рассылки абонентам МТС" fill="grey">
            <PriceCard subtitle="от 2,5 ₽" />
          </Card>
        </li>
        <li className={styles.cardA2P}>
          <Card flagTitle="SMS по своей базе" fill="grey">
            <div className={styles.cardPrices}>
              <PriceCard title="на номера МТС" subtitle="от 1,9 ₽" />
              <PriceCard title="на номера других операторов" subtitle="от 2,4 ₽" />
            </div>
          </Card>
        </li>
      </ul>
      <div className={styles.link}>
        <Anchor onClick={(e: SyntheticEvent) => console.log(e)}>Узнать больше про стоимость</Anchor>
      </div>
    </>
  );
}

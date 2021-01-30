import styles from './scale-preview.module.scss';
import { Title } from '../../shared/Title';
import { BasicCard, Card, PriceCard } from '../../shared/Card';
import { Chart, Profile, Wallet } from '../../shared/icons';

export function ScalePreview() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title
          title={'Для поиска новых клиентов — \n таргетированные SMS-рассылки'}
          subtitle={'Найдите свою аудиторию среди 64+ млн абонентов МТС — \n'
          + 'и отправляйте SMS аудитории, которая готова купить ваши \n'
          + 'товары, услуги или посетить мероприятие'}
        />
      </div>
      <ul className={styles.cardsList}>
        <li className={styles.card}>
          <Card icon={<Wallet className={styles.cardIcon} />}>
            <PriceCard title="Стоимость таргетированного SMS" subtitle="от 2,5 ₽" />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Chart className={styles.cardIcon} />}>
            <PriceCard title="Средний CTR" subtitle="от 3%" />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Profile className={styles.cardIcon} />}>
            <BasicCard subtitle={'Бесплатное индивидуальное имя \n отправителя или стандартное \n бесплатное имя — Promo'} />
          </Card>
        </li>
      </ul>
    </div>
  );
}

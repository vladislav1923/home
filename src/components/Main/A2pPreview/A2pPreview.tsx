import styles from './a2p-preview.module.scss';
import { Title } from '../../shared/Title';
import { BasicCard, Card, PriceCard } from '../../shared/Card';
import { Profile, Wallet } from '../../shared/icons';

export function A2pPreview() {
  return (
    <>
      <div className={styles.title}>
        <Title
          title={'Для удержания покупателей — \n рассылка SMS по базе клиентов'}
          subtitle={'Проще и дешевле возвращать тех, кто уже у вас покупал. Поддерживайте \n'
          + 'лояльность покупателей с помощью SMS-рассылок от имени вашей компании. \n'
          + 'Анонсируйте акции, скидки, пишите об открытии новых торговых точек —\n'
          + 'и клиенты будут возвращаться и покупать больше'}
        />
      </div>
      <ul className={styles.cardsList}>
        <li className={styles.card}>
          <Card icon={<Wallet className={styles.cardIcon} />}>
            <PriceCard title="SMS на номера любых операторов" subtitle="от 1,9 ₽" />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Profile className={styles.cardIcon} />}>
            <BasicCard subtitle={'Бесплатное \n индивидуальное \n имя отправителя'} />
          </Card>
        </li>
      </ul>
    </>
  );
}

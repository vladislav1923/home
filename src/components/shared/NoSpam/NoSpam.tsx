import styles from './no-spam.module.scss';
import { HexagonAttention } from '../icons';
import { Title } from '../Title';

export function NoSpam() {
  return (
    <div className={styles.card}>
      <HexagonAttention className={styles.icon} />
      <div className={styles.content}>
        <Title
          color="white"
          title="Без спама"
          subtitle="Отправляем сообщения только тем, кто дал на это согласие. Одному человеку — не чаще четырёх раз в месяц"
        />
      </div>
    </div>
  );
}

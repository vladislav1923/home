import styles from './no-spam.module.scss';
import { HexagonAttention } from '../icons';

export function NoSpam() {
  return (
    <div className={styles.card}>
      <HexagonAttention className={styles.icon} />
      <div className={styles.content}>
        <p className={styles.title}>Без спама</p>
        <p className={styles.subtitle}>
          Отправляем сообщения только тем, кто дал на это согласие.
          Одному человеку — не чаще четырёх раз в месяц
        </p>
      </div>
    </div>
  );
}

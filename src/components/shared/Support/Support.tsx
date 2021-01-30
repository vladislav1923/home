import { SyntheticEvent } from 'react';
import styles from './support.module.scss';
import { Phone } from '../icons';
import { Button } from '../../ui-kit/Button';

interface Props {
    subtitle: string;
}

export function Support({ subtitle }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={styles.title}>Всегда на связи</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.button}>
          <Button onClick={(e: SyntheticEvent) => console.log(e)}>Задать вопрос</Button>
        </div>
      </div>
      <Phone className={styles.icon} />
    </div>
  );
}

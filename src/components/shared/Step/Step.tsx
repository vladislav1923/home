import { ReactNode } from 'react';
import styles from './step.module.scss';
import { ArrowLarge, ArrowMedium } from '../icons';

interface Props {
    index: number;
    title: string;
    image: ReactNode;
}

export function Step({ index, title, image }: Props) {
  return (
    <div className={styles.step}>
      <div className={styles.content}>
        <p className={styles.index}>
          0
          {index}
        </p>
        <h4 className={styles.title}>{title}</h4>
        <ArrowLarge className={styles.arrowLarge} />
        <ArrowMedium className={styles.arrowMedium} />
      </div>
      <div className={styles.image}>{image}</div>
    </div>
  );
}

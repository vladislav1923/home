import { ReactNode } from 'react';
import styles from './card.module.scss';

interface Props {
    icon: ReactNode;
    children: ReactNode;
}

export function Card({ icon, children }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {icon}
      </div>
      {children}
    </div>
  );
}

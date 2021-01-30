import styles from './price-card.module.scss';

interface Props {
    title: string;
    subtitle: string;
}

export function PriceCard({ title, subtitle }: Props) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

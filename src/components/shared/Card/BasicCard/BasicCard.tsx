import styles from './basic-card.module.scss';

interface Props {
    title?: string;
    subtitle: string;
}

export function BasicCard({ title, subtitle }: Props) {
  return (
    <div className={styles.card}>
      {title && <p className={styles.title}>{title}</p>}
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

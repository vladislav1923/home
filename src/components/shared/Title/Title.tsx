import styles from './title.module.scss';

interface Props {
    title: string;
    titleTag?: 'h1' | 'h2';
    subtitle?: string | null;
}

export function Title({ title, subtitle = null, titleTag = 'h2' }: Props) {
  return (
    <>
      {titleTag === 'h1' && <h1 className={styles.titleH1}>{title}</h1>}
      {titleTag === 'h2' && <h2 className={styles.titleH2}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </>
  );
}

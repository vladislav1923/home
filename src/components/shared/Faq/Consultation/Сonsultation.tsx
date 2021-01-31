import styles from './consultation.module.scss';

export function Consultation() {
  return (
    <a href="tel:88002501111">
      <p className={styles.title}>Бесплатная консультация</p>
      <p className={styles.phone}>8 800 250-11-11</p>
    </a>
  );
}

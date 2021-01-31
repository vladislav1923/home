import styles from './label.module.scss';

interface Props {
    name: string;
    title: string;
    isRequired?: boolean;
}

export const Label = ({ name, title, isRequired }: Props) => (
  <label htmlFor={name} className={styles.label}>
    {title}
    {isRequired && <sup className={styles.sup}>*</sup>}
  </label>
);

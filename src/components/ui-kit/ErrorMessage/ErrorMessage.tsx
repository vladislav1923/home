import styles from './error-message.module.scss';

interface Props {
    children: string;
}

export const ErrorMessage = ({ children }: Props) => (
  <span className={styles.message}>{children}</span>
);

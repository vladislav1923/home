import { ReactNode, SyntheticEvent } from 'react';
import styles from './button.module.scss';

interface Props {
    children: ReactNode;
    onClick: (e: SyntheticEvent) => void;
}

export const Button = ({ children, onClick }: Props) => (
  <button className={styles.button} type="button" onClick={onClick}>{children}</button>
);

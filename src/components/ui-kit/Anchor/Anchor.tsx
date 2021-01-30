import { ReactNode, SyntheticEvent } from 'react';
import styles from './anchor.module.scss';

interface Props {
    children: ReactNode;
    onClick: (e: SyntheticEvent) => void;
}

export const Anchor = ({ children, onClick }: Props) => (
  <button type="button" className={styles.anchor} onClick={onClick}>{children}</button>
);

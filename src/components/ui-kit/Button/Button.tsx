/* eslint-disable react/button-has-type */
import { ReactNode, SyntheticEvent } from 'react';
import styles from './button.module.scss';

interface Props {
    children: ReactNode;
    type?: 'button' | 'submit';
    onClick?: (e: SyntheticEvent) => void;
}

export const Button = ({ children, type = 'button', onClick }: Props) => (
  <button
    className={styles.button}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

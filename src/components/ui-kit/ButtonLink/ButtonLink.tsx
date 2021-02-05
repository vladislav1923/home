import { ReactNode } from 'react';
import styles from './button-link.module.scss';

interface Props {
    href: string;
    uniqName: string;
    children: ReactNode;
}

export const ButtonLink = ({ href, uniqName, children }: Props) => (
  <a href={href} data-uniq-name={uniqName} className={styles.link}>{children}</a>
);

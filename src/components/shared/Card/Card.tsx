import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

interface Props {
    icon?: ReactNode;
    flagTitle?: string;
    fill?: 'white' | 'grey';
    children: ReactNode;
}

export function Card({
  fill = 'white', icon, flagTitle, children,
}: Props) {
  const cardClasses = classNames(
    styles.card,
    { [styles.cardWhite]: fill === 'white' },
    { [styles.cardGrey]: fill === 'grey' },
  );

  return (
    <div className={cardClasses}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {flagTitle
            && (
            <div className={styles.flag}>
              <span className={styles.flagTitle}>{flagTitle}</span>
            </div>
            )}
      {children}
    </div>
  );
}

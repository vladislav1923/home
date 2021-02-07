import { ReactNode } from 'react';
import styles from './support.module.scss';
import { Button } from '../../ui-kit/Button';
import { Title } from '../Title';

interface Props {
    title: string;
    subtitle: string;
    buttonText: string;
    icon: ReactNode;
    onClick?: () => void;
}

export function Support(props: Props) {
  const {
    title, subtitle, buttonText, icon, onClick,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Title
            title={title}
            subtitle={subtitle}
            color="white"
          />
        </div>
        <div className={styles.button}>
          <Button uniqName={`Кнопка ${buttonText}`} onClick={onClick}>{buttonText}</Button>
        </div>
      </div>
      <div className={styles.icon}>
        {icon}
      </div>
    </div>
  );
}

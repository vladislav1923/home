import styles from './header.module.scss';
import { Logo } from '../../ui-kit/Logo';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo name="Маркетолог" />
      </div>
    </div>
  );
}

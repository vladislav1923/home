import { MtsLogo } from '../../icons';
import styles from './header.module.scss';

export function Header() {
  return (
    <div>
      <MtsLogo className={styles.logo} />
    </div>
  );
}

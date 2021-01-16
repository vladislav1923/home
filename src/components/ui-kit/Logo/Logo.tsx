import styles from './logo.module.scss';
import {MtsLogo} from "../../../icons";

type Props = {
  name: string;
}

export function Logo({name}: Props) {
  return (
    <div className={styles.logo}>
      <MtsLogo className={styles.icon} />
      <span className={styles.name}>{name}</span>
    </div>
  )
}

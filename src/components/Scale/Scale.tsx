import styles from './scale.module.scss';
import { About } from './About';
import { Audience } from './Audience';

export function Scale() {
  return (
    <>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.audience}>
        <Audience />
      </div>
    </>
  );
}

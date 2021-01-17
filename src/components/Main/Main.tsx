import styles from './main.module.scss';
import { About } from './About';

export function Main() {
  return (
    <>
      <div className={styles.about}>
        <About />
      </div>
    </>
  );
}

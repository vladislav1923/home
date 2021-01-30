import styles from './main.module.scss';
import { About } from './About';
import { ScalePreview } from './ScalePrice';

export function Main() {
  return (
    <>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.scalePrice}>
        <ScalePreview />
      </div>
    </>
  );
}

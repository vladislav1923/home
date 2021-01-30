import styles from './main.module.scss';
import { About } from './About';
import { ScalePreview } from './ScalePreview';
import {NoSpam} from "../shared/NoSpam";
import {A2pPreview} from "./A2pPreview";

export function Main() {
  return (
    <>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.scalePreview}>
        <ScalePreview />
      </div>
        {/*ScaleSteps*/}
      <div className={styles.noSpam}>
        <NoSpam />
      </div>
        <div className={styles.a2pPreview}>
            <A2pPreview/>
        </div>
        {/*A2pSteps*/}
    </>
  );
}

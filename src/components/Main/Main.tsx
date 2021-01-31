import styles from './main.module.scss';
import { About } from './About';
import { ScalePreview } from './ScalePreview';
import { NoSpam } from '../shared/NoSpam';
import { A2pPreview } from './A2pPreview';
import { Support } from '../shared/Support';
import { Price } from '../shared/Price';
import { Faq } from '../shared/Faq';

export function Main() {
  return (
    <>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.scalePreview}>
        <ScalePreview />
      </div>
      {/* ScaleSteps */}
      <div className={styles.noSpam}>
        <NoSpam />
      </div>
      <div className={styles.a2pPreview}>
        <A2pPreview />
      </div>
      {/* A2pSteps */}
      <div className={styles.support}>
        <Support subtitle={
              'Наши менеджеры ответят на все вопросы по работе сервиса SMS-рассылок \n '
              + 'и посоветуют другие инструменты, чтобы решить вашу бизнес-задачу'}
        />
      </div>
      <div className={styles.price}>
        <Price />
      </div>
      <div className={styles.faq}>
        <Faq />
      </div>
    </>
  );
}

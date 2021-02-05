import styles from './main.module.scss';
import { BasicAbout } from '../shared/BasicAbout';
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
        <BasicAbout
          image1xUrl="/main/about@1x.png"
          image2xUrl="/main/about@2x.png"
          title={'SMS-рассылки \n для вашего бизнеса'}
          subtitle="Привлекайте новых клиентов и продавайте больше постоянным с помощью массовых SMS-рассылок"
          advantageText={'Без минимального бюджета и пакетов услуг. \n Бесплатное имя отправителя'}
          buttonText="Запустить рекламу"
        />
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
              + 'и посоветуют другие инструменты, чтобы решить вашу бизнес-задачу'
}
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

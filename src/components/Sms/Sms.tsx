import styles from './sms.module.scss';
import { BasicAbout } from '../shared/BasicAbout';
import { ScalePreview } from './ScalePreview';
import { NoSpam } from '../shared/NoSpam';
import { A2pPreview } from './A2pPreview';
import { Support } from '../shared/Support';
import { Price } from '../shared/Price';
import { Faq } from '../shared/Faq';
import { Phone } from '../shared/icons';
import {ScaleSteps} from "./ScaleSteps";

export function Sms() {
  return (
    <>
      <div className={styles.about}>
        <BasicAbout
          image1xUrl="/sms/about@1x.png"
          image2xUrl="/sms/about@2x.png"
          title={'SMS-рассылки \n для вашего бизнеса'}
          subtitle="Привлекайте новых клиентов и продавайте больше постоянным с помощью массовых SMS-рассылок"
          advantageText={'Без минимального бюджета и пакетов услуг. \n Бесплатное имя отправителя'}
          buttonText="Запустить рекламу"
        />
      </div>
      <div className={styles.scalePreview}>
        <ScalePreview />
      </div>
      <div className={styles.scaleSteps}>
        <ScaleSteps />
      </div>
      <div className={styles.noSpam}>
        <NoSpam />
      </div>
      <div className={styles.a2pPreview}>
        <A2pPreview />
      </div>
      {/* A2pSteps */}
      <div className={styles.support}>
        <Support
          title="Всегда на связи"
          subtitle={
                  'Наши менеджеры ответят на все вопросы по работе сервиса SMS-рассылок \n'
                  + 'и посоветуют другие инструменты, чтобы решить вашу бизнес-задачу'
}
          buttonText="Задать вопрос"
          icon={<Phone className={styles.supportIcon} />}
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

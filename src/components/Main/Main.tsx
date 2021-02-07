import styles from './main.module.scss';
import { BasicAbout } from '../shared/BasicAbout';
import { Faq } from '../shared/Faq';
import { Cabinet } from './Cabinet';
import { Targeting } from './Targeting';
import { Support } from '../shared/Support';
import { Settings } from '../shared/icons';

export function Main() {
  return (
    <>
      <div className={styles.about}>
        <BasicAbout
          image1xUrl="/main/about@1x.png"
          image2xUrl="/main/about@2x.png"
          title="Найдите клиентов среди абонентов МТС"
          subtitle={'SMS-рассылки, баннеры в мобильных браузерах \n и реклама в соцсетях'}
          buttonText="Запустить рекламу"
        />
      </div>
      <div className={styles.cabinet}>
        <Cabinet />
      </div>
      <div className={styles.targeting}>
        <Targeting />
      </div>
      <div className={styles.support}>
        <Support
          title="Не знаете с чего начать?"
          subtitle="Ответим на вопросы и поможем настроить вашу первую рекламную кампанию"
          buttonText="Оставить заявку"
          icon={<Settings className={styles.supportIcon} />}
        />
      </div>
      <div className={styles.faq}>
        <Faq />
      </div>
    </>
  );
}

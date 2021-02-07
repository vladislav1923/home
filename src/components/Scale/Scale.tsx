import styles from './scale.module.scss';
import { About } from './About';
import { Audience } from './Audience';
import { NoSpam } from '../shared/NoSpam';
import { Business } from './Business/Business';
import { Targets } from './Targets/Targets';
import { Support } from '../shared/Support';
import { Price } from '../shared/Price';
import { Phone } from '../shared/icons';
import { Faq } from '../shared/Faq';

export function Scale() {
  return (
    <>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.audience}>
        <Audience />
      </div>
      <div className={styles.noSpam}>
        <NoSpam />
      </div>
      {/* ScaleSteps */}
      <div className={styles.business}>
        <Business />
      </div>
      {/* ScaleExamples */}
      <div className={styles.targets}>
        <Targets />
      </div>
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

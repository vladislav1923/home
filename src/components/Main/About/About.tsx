import { useContext } from 'react';
import styles from './about.module.scss';
import { Phone } from '../../../icons/Phone';
import { Image } from '../../ui-kit/Image';
import { GlobalContext } from '../../../contexts/Global';

export function About() {
  const context = useContext(GlobalContext);

  console.log('GlobalContext in About', context);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <h1 className={styles.title}>
            SMS-рассылки
            {' '}
            <br />
            {' '}
            для вашего бизнеса
          </h1>
          <p className={styles.subtitle}>
            Привлекайте новых клиентов и продавайте больше постоянным с помощью массовых SMS-рассылок
          </p>
          <button type="button" className={styles.button}>Запустить рекламу</button>
          <div>
            <a href="tel:88002501111" className={styles.contact}>
              <Phone className={styles.contactIcon} />
              <span className={styles.contactTitle}>
                Бесплатная консультация 8 800 250-11-11
              </span>
            </a>
          </div>
        </div>
        <div className={styles.contentRight}>
          <Image
            className={styles.image}
            src="/main/mms-example@1x.png"
            src2x="/main/mms-example@2x.png"
            alt="MMS Example"
          />
        </div>
      </div>
    </div>
  );
}

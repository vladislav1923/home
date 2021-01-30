import { SyntheticEvent } from 'react';
import styles from './about.module.scss';
import { Phone } from '../../shared/icons';
import { Image } from '../../ui-kit/Image';
import { Button } from '../../ui-kit/Button';
import { Title } from '../../shared/Title';

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={styles.title}>
            <Title
              title={'SMS-рассылки \n для вашего бизнеса'}
              titleTag="h1"
              subtitle={'Привлекайте новых клиентов и продавайте больше \n постоянным с помощью массовых SMS-рассылок'}
            />
          </div>

          <div className={styles.button}>
            <Button onClick={(e: SyntheticEvent) => console.log(e)}>Запустить рекламу</Button>
          </div>
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

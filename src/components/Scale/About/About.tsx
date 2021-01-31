import { SyntheticEvent, useContext } from 'react';
import Link from 'next/link';
import styles from './about.module.scss';
import { GlobalContext } from '../../../contexts/Global';
import { Image } from '../../ui-kit/Image';
import { Button } from '../../ui-kit/Button';
import { Title } from '../../shared/Title';

export function About() {
  const { authUrls } = useContext(GlobalContext);
  const { login } = authUrls;
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <div className={styles.title}>
          <Title
            title={'Таргетированные \n SMS-рассылки для \n бизнеса'}
            titleTag="h1"
            subtitle={'Самостоятельно запускайте рассылки в личном \n кабинете. '
            + 'Ваши сообщения получит только целевая \n аудитория, в нужном месте и вовремя'}
          />
        </div>

        <div className={styles.button}>
          <Link href={login}>
            <Button
              uniqName="Кнопка запустить рекламу"
              onClick={(e: SyntheticEvent) => console.log(e)}
            >
              Запустить рекламу
            </Button>
          </Link>
        </div>
        <p className={styles.footnote}>
          Без минимального бюджета и пакетов услуг.
          {' '}
          <br />
          {' '}
          Бесплатное имя отправителя
        </p>
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
  );
}

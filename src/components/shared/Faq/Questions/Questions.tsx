import { useRouter } from 'next/router';
import styles from './questions.module.scss';
import { Accordion } from '../../../ui-kit/Accordion';
import { Anchor } from '../../../ui-kit/Anchor';

export function Questions() {
  const router = useRouter();

  const goToTrainingPage = () => {
    router.push('/training');
  };

  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Accordion title="Что такое МТС Маркетолог?">
            <p className={styles.text}>
              Это сервис для самостоятельного запуска таргетированных рассылок и рекламы в интернете.
              В основе сервиса лежит Big Data МТС — обезличенные данные об абонентах оператора, которые
              позволяют показывать рекламу только той аудитории, которую она может заинтересовать.
            </p>
            <p className={styles.text}>
              Сервисом могут пользоваться физические и юридические лица, индивидуальные предприниматели — абоненты любых операторов.
            </p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Что мне дает Big Data МТС?">
            <p className={styles.text}>
              Возможность использовать сегменты аудитории от МТС для поиска новых клиентов.
            </p>
            <p className={styles.text}>
              Сегменты создавали 200 специалистов на основе тысяч метрик: пол и возраст
              абонентов, их интересы, поведение в офлайне — например пересечение границ.
              Сегменты постоянно обновляются и создаются новые.
            </p>
            <p className={styles.text}>
              Возможность анализировать такие данные есть только у крупных компаний: банков, телекома, ритейлеров.
              С сервисом МТС Маркетолог малый и средний бизнес получает доступ к результату анализа данных МТС.
            </p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Как начать работу?">
            <ol className={styles.orderList}>
              <li className={styles.orderItem}>
                <span className={styles.text}>Зарегистрируйтесь</span>
              </li>
              <li className={styles.orderItem}>
                <span className={styles.text}>Создайте профиль</span>
              </li>
            </ol>
            <p className={`${styles.text} ${styles.textMargin}`}>
              <b className={styles.textBold}>ИП и юрлица:</b>
              {' '}
              заполните анкету с реквизитами кампании, запросите и оплатите счёт.
              Когда деньги зачислятся, сможете запускать рекламу.
            </p>
            <p className={`${styles.text} ${styles.textMargin}`}>
              <b className={styles.textBold}>Физлица:</b>
              {' '}
              если вы абонент МТС или у вас есть подтверждённая учётная запись в «Госуслугах» —
              сможете создать профиль автоматически. В другом случае — обратитесь в любой салон МТС с паспортом.
            </p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Как происходит оплата?">
            <p className={styles.text}>
              Оплата списывается с вашего кошелька в личном кабинете после окончания рекламной кампании.
              Пополнять баланс кошелька можно банковской картой, по счёту или в салонах связи МТС.
            </p>
            <p className={styles.text}>
              Юридическим лицам и ИП первый платеж нужно провести по счёту — чтобы подтвердить профиль.
            </p>
          </Accordion>
        </li>
        <li className={styles.item}>
          <Accordion title="Есть ли обучающие материалы?">
            <p className={styles.text}>
              Есть. Учим работать в сервисе на
              {' '}
              <Anchor size={18} onClick={goToTrainingPage}>вебинарах</Anchor>
              {' '}
              и пишем подробные инструкции в
              {' '}
              <Anchor type="anchor" size={18} href="https://support.mts.ru/mts_marketolog">Справке</Anchor>
              .
              Всегда ответим на вопросы по телефону:
              {' '}
              <Anchor type="anchor" size={18} href="tel:88002501111"> 8 800 250 11 11 </Anchor>
            </p>
          </Accordion>
        </li>
      </ul>

      <Anchor type="anchor" href="https://support.mts.ru/mts_marketolog">Читать больше</Anchor>
    </>

  );
}

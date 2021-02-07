import styles from './cabinet.module.scss';
import { Title } from '../../shared/Title';
import { BasicCard, Card } from '../../shared/Card';
import { Profile, Message } from '../../shared/icons';

export function Cabinet() {
  return (
    <>
      <div className={styles.title}>
        <Title
          title="Самостоятельно запускайте мобильную рекламу в личном кабинете"
          subtitle={'от настройки таргетинга до работы со статистикой — просто \n и без посредников'}
        />
      </div>
      <ul className={styles.cardsList}>
        <li className={styles.card}>
          <Card icon={<Message className={styles.cardIcon} />}>
            <BasicCard title="SMS-рассылки" subtitle={'Таргетированные \n и по вашей базе контактов'} />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Profile className={styles.cardIcon} />}>
            <BasicCard title="Баннеры" subtitle={'На сайтах, которые ваша целевая \n аудитория посещает с телефона'} />
          </Card>
        </li>
      </ul>
    </>
  );
}

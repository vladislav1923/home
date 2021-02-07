import styles from './targeting.module.scss';
import { Title } from '../../shared/Title';
import { BasicCard, Card } from '../../shared/Card';
import { Programmatic, Click, Like } from '../../shared/icons';

export function Targeting() {
  return (
    <>
      <div className={styles.title}>
        <Title
          title={'Тестируйте таргетинг от МТС \n во всех привычных каналах'}
          subtitle={'Для этого оставьте заявку, и мы запустим рекламу за вас. ' +
          'Проработаем портрет аудитории, предложим медиаплан, запустим рекламу и оптимизируем по ходу'}
        />
      </div>
      <ul className={styles.cardsList}>
        <li className={styles.card}>
          <Card icon={<Like className={styles.cardIcon} />}>
            <BasicCard title="Реклама в соцсетях" subtitle="Таргетинг «Вконтакте», MyTarget, Instagram и Facebook" />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Programmatic className={styles.cardIcon} />}>
            <BasicCard
              title="Programmatic-реклама"
              subtitle="Видео, баннерная и аудио-реклама на разных сайтах и в приложениях"
            />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Click className={styles.cardIcon} />}>
            <BasicCard
              title={'CPA-реклама \n и звонковая лидогенерация'}
              subtitle="Реклама с оплатой за клики, горячие лиды, заполнение форм, установку приложений"
            />
          </Card>
        </li>
      </ul>
    </>
  );
}

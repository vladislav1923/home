import styles from './audience.module.scss';
import { Title } from '../../shared/Title';
import { BasicCard, Card } from '../../shared/Card';
import {
  Chart, Click, Money, View,
} from '../../shared/icons';

export function Audience() {
  return (
    <>
      <div className={styles.title}>
        <Title
          title={'Рассылка SMS только \n целевой аудитории'}
          subtitle={'Вы настраиваете портрет получателя с помощью 200+ \n '
                    + 'фильтров: демография, доход, гео, интересы, намерения, \n'
                    + 'образ жизни, звонковая и интернет-активность'}
        />
      </div>
      <ul className={styles.cardsList}>
        <li className={styles.card}>
          <Card icon={<Money className={styles.cardIcon} />}>
            <BasicCard
              title="Экономия бюджета"
              subtitle="Сообщение получат только потенциальные клиенты — вы не платите за нецелевые контакты"
            />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Chart className={styles.cardIcon} />}>
            <BasicCard
              title="Средняя конверсия от 3%"
              subtitle="При правильно настроенном таргетинге у вас будет предсказуемый результат"
            />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<View className={styles.cardIcon} />}>
            <BasicCard
              title="Заметная реклама — не пропустить"
              subtitle="Сообщение придет прямо в руки потенциальным клиентам, нет эффекта баннерной слепоты.
              В 98% случаев SMS прочитают в первые минут после получения"
            />
          </Card>
        </li>
        <li className={styles.card}>
          <Card icon={<Click className={styles.cardIcon} />}>
            <BasicCard
              title="Вероятность клика"
              subtitle="Анализируем поведение аудитории и отправляем SMS только тем, кто вероятнее всего кликнет
              по ссылке в сообщении и перейдет на ваш сайт"
            />
          </Card>
        </li>
      </ul>
    </>
  );
}

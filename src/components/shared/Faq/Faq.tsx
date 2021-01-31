import styles from './faq.module.scss';
import { Title } from '../Title';
import { Questions } from './Questions';
import { PresentationForm } from './PresentationForm';

export function Faq() {
  return (
    <>
      <div className={styles.title}>
        <Title title="Вопросы и ответы" />
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <Questions />
        </div>
        <div className={styles.contentRight}>
          <div className={styles.presentation}>
            <PresentationForm />
          </div>
          call me
        </div>
      </div>
    </>
  );
}

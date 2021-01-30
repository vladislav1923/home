import styles from './questions.module.scss';
import { Accordion } from '../../../ui-kit/Accordion';

export function Questions() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Accordion title="Нужно ли получать согласие на рНужно ли получать согласие на рассылку?ассылку?">
          <p>
            Неееет
          </p>
        </Accordion>
      </li>
      <li className={styles.item}>
        <Accordion title="Нужно ли получать согласие на р">
          <p>
            Неееет
          </p>
        </Accordion>
      </li>
    </ul>
  );
}

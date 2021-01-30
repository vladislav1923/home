import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import styles from './accordion.module.scss';
import { Arrow } from '../../shared/icons';

interface Props {
    title: string;
    isOpen?: boolean;
    children: ReactNode;
}

export function Accordion(props: Props) {
  const { title, isOpen = false, children } = props;
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  const onAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const accordionClasses = classNames(
    styles.accordion,
    { [styles.accordionOpen]: isAccordionOpen },
  );

  return (
    <div className={accordionClasses}>
      <button type="button" className={styles.header} onClick={onAccordionToggle}>
        <p className={styles.title}>{title}</p>
        <Arrow className={styles.arrow} />
      </button>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

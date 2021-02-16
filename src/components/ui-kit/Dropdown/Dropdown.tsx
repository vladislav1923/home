import {
  ReactNode, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import styles from './dropdown.module.scss';
import { ArrowFill } from '../../shared/icons';

interface Props {
    button: ReactNode;
    children: ReactNode;
}

export function Dropdown({ button, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const onClose = () => {
    setIsOpen(false);
  };
  const onGlobalClick = (event: MouseEvent) => {
    const clickedElement = event.target;
    const buttonElement = ref.current as HTMLButtonElement;
    if (clickedElement instanceof Node && !buttonElement.contains(clickedElement)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onGlobalClick);

    return () => {
      document.removeEventListener('click', onGlobalClick);
    };
  }, [children]);

  const contentClasses = classNames({
    [styles.content]: true,
    [styles.contentOpen]: isOpen,
  });

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button ref={ref} type="button" className={styles.button} onClick={onToggle}>
        {button}
        <ArrowFill className={styles.arrow} />
      </button>
      <div className={styles.contentWrapper}>
        <div className={contentClasses}>{children}</div>
      </div>
    </div>
  );
}

/* eslint-disable react/button-has-type */
import { ReactNode, SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface Props {
    children: ReactNode;
    type?: 'button' | 'submit';
    isSpinner?: boolean;
    uniqName: string;
    onClick?: (e: SyntheticEvent) => void;
}

export function Button(props: Props) {
  const {
    type = 'button',
    children,
    isSpinner = false,
    uniqName,
    onClick,
  } = props;

  const spinnerClasses = classNames(
    styles.button,
    styles.spinner,
  );

  return (
    <>
      {isSpinner
                && (
                <div className={spinnerClasses}>
                  loading ...
                </div>
                )}
      {!isSpinner
                && (
                <button
                  className={styles.button}
                  type={type}
                  data-uniq-name={uniqName}
                  onClick={onClick}
                >
                  {children}
                </button>
                )}
    </>
  );
}

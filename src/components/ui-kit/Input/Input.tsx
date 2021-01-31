import { ReactNode, Ref } from 'react';
import styles from './input.module.scss';
import { ErrorMessage } from '../ErrorMessage';

interface Props {
    name: string;
    registerRef: Ref<HTMLInputElement>;
    type?: 'text' | 'password';
    isRequired?: boolean;
    isError?: boolean;
    isDisable?: boolean;
    placeholder?: string;
    errorMessage?: string;
    autocomplete?: 'on' | 'off';
    icon?: ReactNode;
    uniqName: string;
}

export function Input(props: Props) {
  const {
    name,
    registerRef,
    type = 'text',
    isRequired = false,
    isError = false,
    isDisable = false,
    placeholder = '',
    errorMessage = '',
    autocomplete = 'on',
    icon,
    uniqName,
  } = props;

  return (
    <div className={styles.inputWrapper}>
      <input
        id={name}
        className={styles.input}
        type={type}
        name={name}
        ref={registerRef}
        aria-required={isRequired}
        aria-invalid={isError}
        aria-disabled={isDisable}
        disabled={isDisable}
        placeholder={placeholder}
        autoComplete={autocomplete}
        data-uniq-name={uniqName}
      />
      {icon && <span className={styles.icon}>{icon}</span>}
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

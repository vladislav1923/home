import { ReactNode, SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './anchor.module.scss';

interface Props {
    type?: 'anchor' | 'button';
    href?: string;
    size?: 16 | 18;
    children: ReactNode;
    onClick?: (e: SyntheticEvent) => void;
}

export const Anchor = (props: Props) => {
  const {
    type = 'button',
    href,
    size = 16,
    children,
    onClick,
  } = props;

  const classes = classNames(
    styles.anchor,
    styles[`anchorSize${size}`],
  );

  return (
    <>
      {type === 'button' && <button type="button" className={classes} onClick={onClick}>{children}</button>}
      {type === 'anchor' && <a className={classes} href={href} target="_blank" rel="noreferrer">{children}</a>}
    </>
  );
};

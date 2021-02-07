import classNames from 'classnames';
import styles from './title.module.scss';

interface Props {
    title: string;
    titleTag?: 'h1' | 'h2';
    subtitle?: string | null;
    color?: 'white' | 'black';
}

export function Title({
  title, subtitle = null, titleTag = 'h2', color = 'black',
}: Props) {
  const colorClass = classNames({
    [styles.white]: color === 'white',
    [styles.black]: color === 'black',
  });

  const h1Classes = classNames(styles.titleH1, colorClass);
  const h2Classes = classNames(styles.titleH2, colorClass);
  const pClasses = classNames(styles.subtitle, colorClass);

  return (
    <>
      {titleTag === 'h1' && <h1 className={h1Classes}>{title}</h1>}
      {titleTag === 'h2' && <h2 className={h2Classes}>{title}</h2>}
      {subtitle && <p className={pClasses}>{subtitle}</p>}
    </>
  );
}

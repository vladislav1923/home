import styles from './logo.module.scss';
import { MtsLogo } from '../../shared/icons';
import { Products } from '../../../enums/products';

interface Props {
  product: Products;
}

export function Logo({ product }: Props) {
  return (
    <div className={styles.logo}>
      <MtsLogo className={styles.icon} />
      <span className={styles.name}>{product}</span>
    </div>
  );
}

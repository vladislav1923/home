import styles from './logo.module.scss';
import { MtsLogo } from '../../shared/icons';
import {PagesUrls} from "../../../enums/pages-urls";
import {getPageNameByUrl} from "../../../utils/pages-names";

interface Props {
  currentUrl: PagesUrls;
}

export function Logo({ currentUrl }: Props) {
  const productName = getPageNameByUrl(currentUrl);
  return (
    <div className={styles.logo}>
      <MtsLogo className={styles.icon} />
      <span className={styles.name}>{productName}</span>
    </div>
  );
}

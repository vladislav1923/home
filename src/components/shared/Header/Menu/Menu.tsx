import styles from './menu.module.scss';
import { MenuItem } from './MenuItem';
import {PagesUrls} from "../../../../enums/pages-urls";
import {getPageNameByUrl} from "../../../../utils/pages-names";

interface Props {
    currentUrl: string;
}

export function Menu({ currentUrl }: Props) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <MenuItem href={PagesUrls.scale} title={getPageNameByUrl(PagesUrls.scale)} isActive={currentUrl === PagesUrls.scale} />
      </li>
      <li className={styles.item}>
        <MenuItem href={PagesUrls.sms} title={getPageNameByUrl(PagesUrls.sms)} isActive={currentUrl === PagesUrls.sms} />
      </li>
    </ul>
  );
}

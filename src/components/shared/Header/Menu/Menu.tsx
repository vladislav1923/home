import styles from './menu.module.scss';
import {MenuItem} from './MenuItem';

interface Props {
    currentUrl: string;
}

export function Menu({ currentUrl }: Props) {

    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <MenuItem href="/sms" title="СМС" isActive={currentUrl === '/sms'} />
            </li>
            <li className={styles.item}>
                <MenuItem href="/scale" title="scale" isActive={currentUrl === '/scale'} />
            </li>
        </ul>
    )


}

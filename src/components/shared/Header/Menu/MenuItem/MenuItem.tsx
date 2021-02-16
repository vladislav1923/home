import Link from "next/link";
import styles from './menu-item.module.scss'
import classNames from "classnames";

interface Props {
    href: string;
    title: string;
    isActive: boolean;
}

export function MenuItem({href, title, isActive}: Props) {
    const classes = classNames({
        [styles.link]: true,
        [styles.linkActive]: isActive
    })

    return (
        <Link href={href}>
            <a className={classes}>{title}</a>
        </Link>
    )

}
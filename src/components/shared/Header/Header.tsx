// import Link from 'next/link';
// import { useRouter } from 'next/router';
import styles from './header.module.scss';
import { Logo } from '../../ui-kit/Logo';

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo name="Маркетолог" />

        {/* <ul className={styles.menu}> */}
        {/*  <li className={styles.menuItem}> */}
        {/*    <Link href="/banner">О сервисе</Link> */}
        {/*  </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

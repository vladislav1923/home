import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { ProductsList } from './ProductsList';

export function Header() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('/');

  useEffect(() => {
    setCurrentUrl(router.pathname);
    router.events.on('routeChangeStart', setCurrentUrl);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ProductsList currentUrl={currentUrl} />

        {/* <ul className={styles.menu}> */}
        {/*  <li className={styles.menuItem}> */}
        {/*    <Link href="/banner">О сервисе</Link> */}
        {/*  </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { ProductsList } from './ProductsList';
import { Menu } from './Menu';
import {PagesUrls} from "../../../enums/pages-urls";

export function Header() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState<PagesUrls>(PagesUrls.main);

  useEffect(() => {
    setCurrentUrl(router.pathname as PagesUrls);
    router.events.on('routeChangeStart', setCurrentUrl);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ProductsList currentUrl={currentUrl} />
        <Menu currentUrl={currentUrl} />

      </div>
    </div>
  );
}

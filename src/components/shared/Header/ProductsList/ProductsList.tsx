import Link from 'next/link';
import { useState } from 'react';
import styles from './products-list.module.scss';
import { Dropdown } from '../../../ui-kit/Dropdown';
import { Logo } from '../../../ui-kit/Logo';
import {PagesUrls} from "../../../../enums/pages-urls";
import {getPageNameByUrl} from "../../../../utils/pages-names";

interface Props {
    currentUrl: PagesUrls;
}

export function ProductsList({ currentUrl }: Props) {
  const [productsList] = useState([
    {
      name: getPageNameByUrl(PagesUrls.main),
      url: PagesUrls.main,
    },
    {
      name: getPageNameByUrl(PagesUrls.research),
      url: PagesUrls.research,
    },
    {
      name: getPageNameByUrl(PagesUrls.mall),
      url: PagesUrls.research,
    },
  ]);

  return (
    <Dropdown button={<Logo currentUrl={currentUrl} />}>
      <ul className={styles.list}>
        {productsList.map((product) => (
          <li key={product.name} className={styles.item}>
            <Link href={product.url}>
              <a
                className={styles.productLink}
                data-active={currentUrl === product.url}
              >
                МТС
                {' '}
                {product.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Dropdown>
  );
}

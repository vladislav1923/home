import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './products-list.module.scss';
import { Dropdown } from '../../../ui-kit/Dropdown';
import { Products } from '../../../../enums/products';
import { Logo } from '../../../ui-kit/Logo';

interface Props {
    currentUrl: string;
}

export function ProductsList({ currentUrl }: Props) {
  const [currentProduct, setCurrentProduct] = useState(Products.main);
  useEffect(() => {
    switch (currentUrl) {
      case '/research':
        setCurrentProduct(Products.research);
        break;
      case '/malldata':
        setCurrentProduct(Products.mall);
        break;
      default:
        setCurrentProduct(Products.main);
        break;
    }
  }, [currentUrl]);

  const [productsList] = useState([
    {
      name: Products.main,
      url: '/',
    },
    {
      name: Products.research,
      url: '/research',
    },
    {
      name: Products.mall,
      url: '/malldata',
    },
  ]);

  return (
    <Dropdown button={<Logo product={currentProduct} />}>
      <ul className={styles.list}>
        {productsList.map((product) => (
          <li key={product.name} className={styles.item}>
            <Link href={product.url}>
              <a
                className={styles.productLink}
                data-active={currentProduct === product.name}
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

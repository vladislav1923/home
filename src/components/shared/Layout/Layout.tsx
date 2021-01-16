import { ReactNode } from 'react';
import Head from 'next/head';
import styles from './layout.module.scss';
import { Header } from '../Header';

type Props = {
  children: ReactNode,
  title: string,
  description: string,
}

export function Layout(props: Props) {
  const { children, title, description } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          Футер
          {/* <Footer/> */}
        </footer>
      </div>
    </>
  );
}

import { ReactNode } from 'react';
import styles from './layout.module.scss';
import { Header } from '../Header';

type Props = {
    children: ReactNode
}

export function Layout(props: Props) {
  const { children } = props;

  return (
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
  );
}

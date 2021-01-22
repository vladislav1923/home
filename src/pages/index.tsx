import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Main } from '../components/Main';
import { AuthUrls } from '../interfaces/AuthUrls';
import { getAuthUrls } from '../services/auth';
import { getActiveAbTests } from '../services/ab-test';
import { AbTest } from '../interfaces/AbTest';

type Props = {
    authUrls: AuthUrls,
    abTests: AbTest[]
}

const IndexPage = ({ authUrls, abTests }: Props) => {
  console.log(authUrls);
  console.log(abTests);

  return (
    <>
      <Head>
        <title>Мтс маркетолог</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="MAAAAAS" />
      </Head>
      <Main />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const authUrls = await getAuthUrls();
  const abTests = await getActiveAbTests();

  return {
    props: {
      authUrls,
      abTests,
    },
  };
};

export default IndexPage;

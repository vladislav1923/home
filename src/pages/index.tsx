import Head from 'next/head';
import { Main } from '../components/Main';
import { getAuthUrls } from '../services/server/auth';
import { getActiveAbTests } from '../services/server/ab-test';

const IndexPage = () => (
  <>
    <Head>
      <title>Мтс маркетолог</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="MAAAAAS" />
    </Head>
    <Main />
  </>
);

export const getServerSideProps = async () => {
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

import Head from 'next/head';
import { getAuthUrls } from '../services/server/auth';
import { getActiveAbTests } from '../services/server/ab-test';
import { Scale } from '../components/Scale';

const ScalePage = () => (
  <>
    <Head>
      <title>Мтс маркетолог - Scale</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="MAAAAAS" />
    </Head>
    <Scale />
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

export default ScalePage;

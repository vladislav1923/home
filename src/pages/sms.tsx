import Head from 'next/head';
import { Sms } from '../components/Sms';
import { getAuthUrls } from '../services/server/auth';
import { getActiveAbTests } from '../services/server/ab-test';

const SmsPage = () => (
  <>
    <Head>
      <title>Мтс маркетолог - Index</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="MAAAAAS" />
    </Head>
    <Sms />
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

export default SmsPage;

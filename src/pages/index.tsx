import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Main } from '../components/Main';
import { AuthUrls } from '../interfaces/AuthUrls';
import { getAuthUrls } from '../services/auth';

type Data = {
    authUrls: AuthUrls
}

const IndexPage = ({ authUrls }: Data) => {
  console.log(authUrls);

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
  const response = await getAuthUrls();

  return {
    props: {
      authUrls: response,
    },
  };
};

export default IndexPage;

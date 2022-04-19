import { GetServerSideProps } from 'next';

const Page = () => {
  return null;
};
export default Page;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    redirect: { destination: '/settings/interface', permanent: true }
  };
};

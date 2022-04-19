import { GetServerSideProps } from 'next';

const Page = ({}) => {
  return null;
};
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    redirect: { destination: '/dashboard', permanent: true }
  };
};
export default Page;

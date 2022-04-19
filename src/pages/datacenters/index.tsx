import { jsx } from '@theme-ui/core';
import { GetServerSideProps } from 'next';
const Page = () => {
  return <div sx={{ height: '50000px' }}></div>;
};
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};
export default Page;

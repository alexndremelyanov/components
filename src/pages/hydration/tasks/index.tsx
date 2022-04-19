import { GetServerSideProps } from 'next';
import { useContext } from 'react';
import { List } from 'react-virtualized';
import { LayoutContext } from '../../../../lib';
import { getData } from '../../../utils';

const Page = () => {
  return null;
};
export default Page;
export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

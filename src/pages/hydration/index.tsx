import { GetServerSideProps } from 'next';

export default function Page() {
  return null;
}
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    redirect: { destination: '/hydration/tasks', permanent: true }
  };
};

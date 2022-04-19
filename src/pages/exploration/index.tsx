import { jsx } from '@theme-ui/core';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Card, CardBody, Anchor } from '../../../lib';
import { PreLayout } from '../_app';

const Page = () => {
  return (
    <div sx={{ gap: 2, display: 'flex' }}>
      <Link href="/exploration/tasks" passHref>
        <Anchor sx={{ fontSize: '100px' }}>
          <Card>
            <CardBody>Tasks</CardBody>
          </Card>
        </Anchor>
      </Link>
      <Link href="/exploration/workers" passHref>
        <Anchor sx={{ fontSize: '100px' }}>
          <Card>
            <CardBody>Workers</CardBody>
          </Card>
        </Anchor>
      </Link>
    </div>
  );
};
Page.getLayout = page => {
  return (
    <PreLayout conversion={{ '/exploration': 'Exploration' }}>{page}</PreLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default Page;

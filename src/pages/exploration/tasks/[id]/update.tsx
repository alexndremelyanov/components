import { useRouter } from 'next/router';
import { PreLayout } from '../../../_app';

const Page = () => {
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat
      culpa beatae quas! Aperiam eos ullam excepturi, iste quisquam quis odio
      quam dolore recusandae dicta voluptatibus dolorum dolores earum rerum?
    </div>
  );
};
Page.getLayout = page => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <PreLayout
      conversion={{
        '/exploration': 'Exploration',
        '/exploration/tasks': 'Tasks',
        [`/exploration/tasks/${id}`]: 'Kakayato hueta',
        [`/exploration/tasks/${id}/update`]: 'Update'
      }}
    >
      {page}
    </PreLayout>
  );
};
export const getServerSideProps = async ctx => {
  return { props: {} };
};
export default Page;

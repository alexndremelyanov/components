import { jsx } from '@theme-ui/core';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Checkbox,
  Switch,
  TextField,
  PairList,
  Box,
  TabGroup,
  TabOption,
  Button,
  Select,
  Textarea,
  Slider,
  Radio,
  Info,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeading,
  Heading,
  Tooltip
} from '../../../../../lib';
import { PreLayout } from '../../../_app';
const Page = () => {
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (!query.tab) {
      router.push({ query: { ...query, tab: 'overview' } });
    }
  }, [query]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        justifyContent: 'center'
      }}
    >
      <TabGroup activeId={query.tab?.toString()}>
        <Link passHref href={{ query: { ...query, tab: 'overview' } }}>
          <TabOption id="overview">Overview</TabOption>
        </Link>
        <Link passHref href={{ query: { ...query, tab: 'properties' } }}>
          <TabOption id="properties">Properties</TabOption>
        </Link>
      </TabGroup>

      {query.tab === 'overview' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Buttons />
          <Inputs />
          <Modals />
          <PairList
            sx={{ marginTop: '30px' }}
            pairs={[
              ['Name', 'DeltaBMCscan'],
              ['Cron', '*/5 * * * *'],
              ['Active', 'True'],
              ['Running', 'False'],
              ['Next execution', '15.04.2022'],
              ['Last status', 'SUCCESS']
            ]}
          />
        </Box>
      )}
    </Box>
  );
};
Page.getLayout = page => {
  const router = useRouter();
  return (
    <PreLayout
      conversion={{
        '/exploration': 'Exploration',
        '/exploration/tasks': 'Tasks',
        [router.asPath]: 'Delta DCM'
      }}
    >
      {page}
    </PreLayout>
  );
};
export default Page;
export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl
}) => {
  return { props: {} };
};
const Modals = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Tooltip content="Open modal">
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      </Tooltip>
      <Modal size="medium" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeading>
          <Heading level={1}>Modal Heading</Heading>
        </ModalHeading>
        <ModalBody>
          <Tooltip content="Lort aliquam?">
            <Button size="small" uppercase>
              Show tooltip
            </Button>
          </Tooltip>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setIsOpen(false)}
            color="success"
            variant="outlined"
            uppercase
            sx={{ marginLeft: 'auto' }}
          >
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
};
const Inputs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}
    >
      <TextField />
      <Switch />
      <Checkbox />
      <Select>
        <option value="True"> dadpos daksdoopkdapskd</option>
        <option value="True">True</option>
        <option value="True">True</option>
        <option value="True">True</option>
        <option value="True">True</option>
      </Select>
      <Slider min={10} max={100} step={10} />
      <Radio id="1" name="name" />
      <Radio id="2" name="name" />
      <Radio id="3" name="name" />
      <Textarea />
      <Info>
        Info Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur
      </Info>
      <Info severity="error">
        Error Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur
      </Info>
      <Info severity="warning">
        Warning Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur
      </Info>
      <Info severity="success">
        Success Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur
      </Info>
    </Box>
  );
};
const Buttons = () => {
  return (
    <Box
      sx={{
        marginTop: '12px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        flexWrap: 'wrap'
      }}
    >
      <Button
        size="small"
        uppercase
        zoomable
        variant="outlined"
        color="primary"
      >
        Add
      </Button>
      <Button
        size="medium"
        uppercase
        zoomable
        variant="contained"
        color="primary"
      >
        Add
      </Button>
      <Button size="medium" uppercase variant="text" color="primary">
        Refresh
      </Button>
      <Button size="medium" uppercase variant="contained" color="secondary">
        Refresh
      </Button>
      <Button size="medium" uppercase variant="outlined" color="secondary">
        Refresh
      </Button>
      <Button size="large" zoomable variant="contained" color="primary">
        Find podcasts
      </Button>
      <Button size="large" zoomable variant="contained" color="success">
        Download desktop app
      </Button>
      <Button size="large" zoomable variant="outlined" color="success">
        Download desktop app
      </Button>
      <Button
        size="medium"
        zoomable
        uppercase
        variant="contained"
        color="danger"
      >
        Delete
      </Button>
      <Button
        size="medium"
        zoomable
        uppercase
        variant="outlined"
        color="danger"
      >
        Delete outlined
      </Button>
      <Button size="medium" uppercase variant="text" color="primary">
        Delete outlined
      </Button>
      <Button size="medium" uppercase variant="text" color="secondary">
        Delete outlined
      </Button>
      <Button size="medium" uppercase variant="text" color="success">
        Delete outlined
      </Button>
      <Button size="medium" uppercase variant="text" color="danger">
        Govno
      </Button>
    </Box>
  );
};

import { jsx } from '@theme-ui/core';
import Link from 'next/link';
import {
  CardHeading,
  Checkbox,
  Switch,
  CardBody,
  TextField,
  Heading,
  Card,
  PairList,
  Anchor,
  Box
} from '../../lib';

const Page = ({}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          marginX: 'auto',
          justifyContent: 'center',
          maxWidth: '1500px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: 2
          }}
        >
          <Card size="medium">
            <CardHeading>
              <Link href="/exploration/tasks/4">
                <Anchor sx={{}}>
                  <Heading level={2}>Delta DCM main</Heading>
                </Anchor>
              </Link>
            </CardHeading>
            <CardBody>
              <PairList
                pairs={[
                  ['Id', 'f5a63094-0d2c-47f1-8eb5-bfd765ff420b'],
                  ['Name', 'DeltaDC'],
                  [
                    'Description',
                    'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia  '
                  ],
                  ['Latitude', '55'],
                  ['Longitude', '37']
                ]}
              />
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

const FormTextField = ({ field, ...rest }) => {
  return <TextField {...field} {...rest} />;
};
const FormSwitch = ({ field, ...rest }) => {
  return <Switch {...field} {...rest} />;
};
const FormCheckbox = ({ field, ...rest }) => {
  return <Checkbox {...field} {...rest} />;
};
export default Page;

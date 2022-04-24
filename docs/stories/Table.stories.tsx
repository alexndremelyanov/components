import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { Box, TableCell, TableHead, TableHeadCell, TableRow } from '../../lib';

export default {
  title: 'Data display/Table',
  component: Box
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => (
  <Box>
    <TableHead>
      <TableHeadCell>Table head cell</TableHeadCell>
    </TableHead>
    <TableRow>
      <TableCell>Table cell</TableCell>
    </TableRow>
  </Box>
);

export const Basic = Template.bind({});

Basic.args = {};

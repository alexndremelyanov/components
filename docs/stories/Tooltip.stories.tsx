import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { Button, Tooltip } from '../../lib';

export default {
  title: 'Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => (
  <Tooltip {...args}>
    <Button color="success" size="large" variant="outlined">
      Show tooltip
    </Button>
  </Tooltip>
);

export const Basic = Template.bind({});

Basic.args = {
  content: 'Tooltip content here'
};

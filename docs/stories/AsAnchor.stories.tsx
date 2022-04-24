import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { AsAnchor } from '../../lib';

export default {
  title: 'Inputs/AsAnchor',
  component: AsAnchor
} as ComponentMeta<typeof AsAnchor>;

const Template: ComponentStory<typeof AsAnchor> = args => (
  <AsAnchor {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  children: 'Hekdasp kpoaskd'
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { Anchor, BreadCrumb, BreadCrumbs } from '../../lib';

export default {
  title: 'Navigation/BreadCrumbs',
  component: BreadCrumbs
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = args => (
  <BreadCrumbs {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  activeId: '/settings/display/advanced',
  children: [
    <BreadCrumb id="/settings">
      <Anchor href="#">Settings</Anchor>
    </BreadCrumb>,
    <BreadCrumb id="/settings/display">
      <Anchor href="#">Display</Anchor>
    </BreadCrumb>,
    <BreadCrumb id="/settings/display/advanced">
      <Anchor href="#">Advanced</Anchor>
    </BreadCrumb>
  ]
};

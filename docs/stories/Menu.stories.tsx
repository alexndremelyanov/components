import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { Fragment, useRef } from 'react';
import {
  EllipsisText,
  MenuButton,
  Menu,
  Tooltip,
  MenuItem,
  AsAnchor,
  useMenuManager
} from '../../lib';

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => {
  const arrowRef = useRef(null);
  const manager = useMenuManager({ arrowRef });
  return (
    <Fragment>
      <MenuButton manager={manager}>
        <EllipsisText width={120} sx={{ color: 'text_base', fontWeight: 700 }}>
          Alexander Emelyanov
        </EllipsisText>
      </MenuButton>
      <Menu manager={manager}>
        <MenuItem>
          <AsAnchor href="#">Profile</AsAnchor>
        </MenuItem>
        <MenuItem>
          <AsAnchor href="#">Account</AsAnchor>
        </MenuItem>
        <MenuItem>
          <AsAnchor href="#">Settings</AsAnchor>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export const Basic = Template.bind({});

Basic.args = {};

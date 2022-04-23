import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import Link from 'next/link';
import { BsThreeDots } from 'react-icons/bs';
import {
  Dropdown,
  DropdownItem,
  AsAnchor,
  Box,
  Button,
  ICON_MEDIUM_SIZE,
  AsButton
} from '../../lib';

export default {
  title: 'Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'start' }}>
      <Dropdown
        component={
          <AsButton>
            <BsThreeDots size={ICON_MEDIUM_SIZE} />
          </AsButton>
        }
      >
        <DropdownItem>
          <Link passHref href="#">
            <AsAnchor>Profile</AsAnchor>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link passHref href="#">
            <AsAnchor>New window</AsAnchor>
          </Link>
        </DropdownItem>
        <DropdownItem divide>
          <Link passHref href="#">
            <AsAnchor>Close Tab</AsAnchor>
          </Link>
        </DropdownItem>
        <Dropdown label="Share">
          <DropdownItem divide>
            <Link passHref href="#">
              <AsAnchor>Mail</AsAnchor>
            </Link>
          </DropdownItem>
          <Dropdown label="Preferences">
            <DropdownItem>
              <Link passHref href="#">
                <AsAnchor>Reddit</AsAnchor>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link passHref href="#">
                <AsAnchor>LinkedIn</AsAnchor>
              </Link>
            </DropdownItem>
          </Dropdown>
          <Dropdown label="Other">
            <DropdownItem>
              <Link passHref href="#">
                <AsAnchor>Reddit</AsAnchor>
              </Link>
            </DropdownItem>
            <Dropdown label="Other">
              <DropdownItem>
                <Link passHref href="#">
                  <AsAnchor>Reddit</AsAnchor>
                </Link>
              </DropdownItem>
              <Dropdown label="Other">
                <DropdownItem>
                  <Link passHref href="#">
                    <AsAnchor>Reddit</AsAnchor>
                  </Link>
                </DropdownItem>
                <Dropdown label="Other">
                  <DropdownItem>
                    <Link passHref href="#">
                      <AsAnchor>Reddit</AsAnchor>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link passHref href="#">
                      <AsAnchor>LinkedIn</AsAnchor>
                    </Link>
                  </DropdownItem>
                </Dropdown>
              </Dropdown>
            </Dropdown>
          </Dropdown>
        </Dropdown>
      </Dropdown>
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {};

import {
  useFloating,
  offset,
  autoPlacement,
  arrow,
  shift,
  Alignment
} from '@floating-ui/react-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx, useThemeUI } from '@theme-ui/core';
import { useRef, useState } from 'react';
import {
  EllipsisText,
  MenuButton,
  Menu,
  Tooltip,
  Box,
  MenuItem,
  AsButton,
  useClickAwayListener,
  TrapFocus,
  AsAnchor
} from '../../lib';

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => {
  const arrowRef = useRef(null);
  const container = useRef(null);
  const {
    theme: { colors }
  } = useThemeUI();
  const { x, y, reference, floating, strategy } = useFloating({
    middleware: [
      offset(6),
      autoPlacement({
        alignment: 'start',
        autoAlignment: false,
        allowedPlacements: ['bottom']
      }),
      arrow({ element: arrowRef }),
      shift()
    ],
    placement: 'bottom'
  });
  const [display, setDisplay] = useState<'visible' | 'hidden'>('hidden');
  const show = () => {
    setDisplay('visible');
  };
  const hide = () => {
    setDisplay('hidden');
  };
  useClickAwayListener(container, hide, [floating]);
  return (
    <Box ref={container}>
      <MenuButton sx={{ width: 'fit-content' }} ref={reference} onClick={show}>
        <EllipsisText width={120} sx={{ color: 'text_base', fontWeight: 700 }}>
          Alexander Emelyanov
        </EllipsisText>
      </MenuButton>
      <div
        ref={floating}
        style={{
          background: colors?.decorative_subdued as string,
          fontWeight: 'bold',
          fontSize: '14px',
          padding: '10px 6px',
          borderRadius: '4px',
          boxShadow: '2px 4px 8px 7px rgba(0, 0, 0, 0.17)',
          visibility: display,
          position: strategy,
          top: y ?? '',
          left: x ?? ''
        }}
      >
        <Menu anchorRef={undefined}>
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
      </div>
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {};

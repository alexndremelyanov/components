import { jsx, useThemeUI } from '@theme-ui/core';
import { useRef } from 'react';
import { useClickAwayListener } from '../../hooks';
import { Box, BoxProps } from '../Box';

export interface MenuProps extends BoxProps {
  manager: any;
}
export const Menu = ({ manager, ...rest }: MenuProps) => {
  const {
    theme: { colors }
  } = useThemeUI();
  const containerRef = useRef(null);
  const { floating, display, hide, strategy, x, y } = manager;
  useClickAwayListener(containerRef.current, hide);
  return (
    <Box ref={containerRef}>
      <Box
        ref={floating}
        style={{
          background: colors?.decorative_subdued as string,
          fontWeight: 'bold',
          fontSize: '14px',
          padding: '4px',
          borderRadius: '4px',
          boxShadow: '2px 4px 8px 7px rgba(0, 0, 0, 0.17)',
          visibility: display,
          position: strategy,
          top: y ?? '',
          left: x ?? ''
        }}
        sx={{ minWidth: '188px' }}
        {...rest}
      />
    </Box>
  );
};

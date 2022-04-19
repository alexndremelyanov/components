import { jsx } from '@theme-ui/core';
import { RefObject } from 'react';
import { Box, BoxProps } from '../Box';

export interface MenuProps extends BoxProps {
  anchorRef: RefObject<any>;
}
export const Menu = ({ anchorRef, ...rest }: MenuProps) => {
  return <Box sx={{ minWidth: '120px' }} {...rest} />;
};

import { jsx } from '@theme-ui/core';
import { Box, BoxProps } from '../Box';

export interface MenuItemProps extends BoxProps {}
export const MenuItem = ({ ...rest }: MenuItemProps) => {
  return (
    <Box
      sx={{
        '& > a, button': {
          width: '100%',
          paddingX: '4px',
          minHeight: '42px',
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }
      }}
      {...rest}
    />
  );
};

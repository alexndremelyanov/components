import { jsx } from '@theme-ui/core';
import { Box, BoxProps } from '../Box';

export interface MenuItemProps extends BoxProps {}
export const MenuItem = ({ ...rest }: MenuItemProps) => {
  return (
    <Box
      sx={{
        '& > a, button': {
          width: '100%',
          padding: '12px 8px 12px 12px',
          display: 'flex',
          borderRadius: 1,
          '&:hover, &:active, &:focus, &:focus-visible': {
            backgroundColor: 'rgba(255,255,255,.1)'
          },
          color: 'text_base',
          alignItems: 'center',
          height: '100%',
          fontWeight: 500
        }
      }}
      {...rest}
    />
  );
};

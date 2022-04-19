import { jsx } from '@theme-ui/core';
import { HTMLAttributes } from 'react';
import { Box } from '../Box';
export interface CardHeadingProps extends HTMLAttributes<HTMLDivElement> {}
export const CardHeading = ({ children, ...rest }: CardHeadingProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '24px 24px 0 24px'
      }}
    >
      {children}
    </Box>
  );
};

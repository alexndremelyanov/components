import { jsx } from '@theme-ui/core';
import { HTMLAttributes } from 'react';
import { Box } from '../Box';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
}
export const Card = ({ children, size = 'medium', ...rest }: CardProps) => {
  return (
    <Box
      sx={{
        borderRadius: '4px',
        width: '100%',
        maxWidth:
          size === 'small' ? '600px' : size === 'medium' ? '750px' : '900px',
        backgroundColor: 'rgb(24, 24, 24)'
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

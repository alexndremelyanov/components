import { jsx } from '@theme-ui/core';
import { forwardRef, HTMLAttributes } from 'react';
import { Box } from '../Box';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
}
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, size = 'medium', ...rest }: CardProps, ref) => {
    return (
      <Box
        ref={ref}
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
  }
);

import { jsx } from '@theme-ui/core';
import { forwardRef, HTMLAttributes } from 'react';
import { MODAL_PADDING } from '../../variables';
import { Box } from '../Box';
export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}
export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Box
        sx={{
          padding: `${MODAL_PADDING}px`
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

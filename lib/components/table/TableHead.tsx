import { jsx } from '@theme-ui/core';
import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks';
import { LAYOUT_HEADER_HEIGHT } from '../../variables';
import { Box } from '../Box';
export interface TableHeadProps extends HTMLAttributes<HTMLDivElement> {}
export const TableHead = forwardRef<HTMLDivElement, TableHeadProps>(
  ({ ...rest }: TableHeadProps, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          borderBottomWidth: '1px',
          borderBottomColor: '#313030',
          borderBottomStyle: 'solid',
          marginBottom: '16px',
          backgroundColor: 'transparent'
        }}
        {...rest}
      />
    );
  }
);

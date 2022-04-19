import { jsx } from '@theme-ui/core';
import { HTMLAttributes } from 'react';
import { Box } from '../Box';
export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {}
export const TableRow = ({ ...rest }: TableRowProps) => {
  return (
    <Box
      sx={{
        borderRadius: 5,
        display: 'flex',
        height: '56px',
        width: 'fit-content',
        alignItems: 'center',
        '&:hover, &:active, &:focus-visible': { backgroundColor: '#2b2b2a' }
      }}
      {...rest}
    />
  );
};

import { jsx } from '@theme-ui/core';
import { HTMLAttributes } from 'react';
import { Box } from '../Box';
import { EllipsisText } from '../EllipsisText';
export interface TableHeadCellProps extends HTMLAttributes<HTMLDivElement> {}
export const TableHeadCell = ({ children, ...rest }: TableHeadCellProps) => {
  return (
    <Box
      sx={{
        paddingX: '8px',
        display: 'flex',
        height: '36px',
        alignItems: 'center'
      }}
      {...rest}
    >
      <EllipsisText>{children}</EllipsisText>
    </Box>
  );
};
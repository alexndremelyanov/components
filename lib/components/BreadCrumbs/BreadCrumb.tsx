import { jsx } from '@theme-ui/core';
import { HTMLAttributes } from 'react';
export interface BreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const BreadCrumb = ({
  children,
  isActive,
  ...rest
}: BreadCrumbProps) => {
  return (
    <span
      sx={{
        '& > a, button': {
          whiteSpace: 'nowrap',
          fontSize: '24px',
          fontWeight: 600,
          '&:hover, &:active, &:focus-visible': {
            textDecoration: 'none'
          },
          color: isActive ? 'text_base' : 'inherit'
        }
      }}
      {...rest}
    >
      {children}
    </span>
  );
};

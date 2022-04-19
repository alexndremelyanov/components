import { jsx } from '@theme-ui/core';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
export interface AsAnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export const AsAnchor = forwardRef<HTMLAnchorElement, AsAnchorProps>(
  ({ ...rest }: AsAnchorProps, ref) => {
    return (
      <a
        ref={ref}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover, &:active, &:focus-visible': {
            textDecoratione: 'none'
          }
        }}
        {...rest}
      />
    );
  }
);

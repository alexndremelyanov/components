import { jsx } from '@theme-ui/core';
import { AnchorHTMLAttributes, FC, forwardRef } from 'react';
export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export const Anchor: FC<AnchorProps> = forwardRef<
  HTMLAnchorElement,
  AnchorProps
>(({ children, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      sx={{
        textDecoration: 'none',
        '&:hover, &:active, &:focus-visible': { textDecoration: 'underline' },
        color: 'text_subdued',
        padding: 0,
        margin: 0
      }}
      {...rest}
    >
      {children}
    </a>
  );
});

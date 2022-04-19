import { jsx } from '@theme-ui/core';
import { forwardRef, useContext } from 'react';
import { Anchor, AnchorProps } from '../Anchor';
import { TabContext } from './TabContext';
export interface TabOptionProps extends AnchorProps {
  id: string;
}
export const TabOption = forwardRef<HTMLAnchorElement, TabOptionProps>(
  ({ children, id, ...rest }, ref) => {
    const { activeId } = useContext(TabContext);
    return (
      <Anchor
        sx={{
          padding: '12px 20px',
          borderRadius: 5,
          cursor: 'pointer',
          textAlign: 'center',
          display: 'inline-block',
          ...(activeId === id && {
            backgroundColor: 'essential_accent'
          })
        }}
        {...rest}
      >
        {children}
      </Anchor>
    );
  }
);

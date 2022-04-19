import { jsx } from '@theme-ui/core';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { DISABLED_OPACITY } from '../variables';
export interface AsButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const AsButton = forwardRef<HTMLButtonElement, AsButtonProps>(
  ({ disabled, ...rest }: AsButtonProps, ref) => {
    return (
      <button
        ref={ref}
        style={{
          opacity: disabled ? DISABLED_OPACITY : 1,
          cursor: disabled ? 'auto' : 'pointer'
        }}
        sx={{ border: 'none', background: 'none' }}
        {...rest}
      />
    );
  }
);

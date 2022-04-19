import { jsx } from '@theme-ui/core';
import { forwardRef, InputHTMLAttributes, useCallback, useRef } from 'react';
import { DISABLED_OPACITY } from '../../variables';
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ disabled, onKeyDown, value, ...rest }: SwitchProps, ref) => {
    return (
      <label
        style={{ ...(disabled && { opacity: DISABLED_OPACITY }) }}
        sx={{
          display: 'inline-block',
          height: '26px',
          position: 'relative',
          verticalAlign: 'middle',
          userSelect: 'none',
          'input:checked + span': {
            background: '#1db954'
          },
          'input:checked + span:before': {
            transform: 'translateX(22px)'
          },
          'input:not(:disabled) + span': {
            cursor: 'pointer',
            opacity: 1
          },
          'input:disabled + span:before': {
            background: '#eee'
          },
          'input:disabled + span': {
            opacity: DISABLED_OPACITY
          }
        }}
      >
        <input
          ref={ref}
          disabled={disabled}
          sx={{
            display: 'none'
          }}
          checked={value as unknown as boolean}
          type="checkbox"
          {...rest}
        />
        <span
          sx={{
            position: 'relative',
            display: 'inline-block',
            boxSizing: 'border-box',
            width: '46px',
            height: '24px',
            borderRadius: '25%/50%',
            verticalAlign: 'top',
            backgroundColor: '#535353',
            '&:before': {
              content: "''",
              position: 'absolute',
              top: '2px',
              left: '2px',
              display: 'inline-block',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'white'
            }
          }}
          tabIndex={disabled ? -1 : 0}
        />
      </label>
    );
  }
);

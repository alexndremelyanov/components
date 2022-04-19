import {
  useFloating,
  shift,
  offset,
  flip,
  arrow,
  autoPlacement
} from '@floating-ui/react-dom';
import { jsx, useThemeUI } from '@theme-ui/core';
import {
  Fragment,
  HTMLAttributes,
  ReactFragment,
  ReactNode,
  useCallback,
  useRef,
  useState
} from 'react';
import { useDebounce } from '../hooks';
import { TOOLTIP_ENTER_DELAY, TOOLTIP_EXIT_DELAY } from '../variables';

export interface TooltipProps extends HTMLAttributes<ReactFragment> {
  content: ReactNode;
}
let isEntering = false;
export const Tooltip = ({ children, content, ...rest }: TooltipProps) => {
  const arrowRef = useRef(null);
  const {
    theme: { colors }
  } = useThemeUI();
  const {
    x,
    y,
    placement,
    reference,
    floating,
    strategy,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }
  } = useFloating({
    middleware: [
      offset(12),
      autoPlacement(),
      arrow({ element: arrowRef }),
      shift()
    ],
    placement: 'top'
  });
  const [display, setDisplay] = useState<'visible' | 'hidden'>('hidden');
  const show = useCallback(() => {
    isEntering = true;
    setTimeout(() => {
      isEntering && setDisplay('visible');
    }, TOOLTIP_ENTER_DELAY);
  }, [isEntering]);
  const hide = useCallback(() => {
    isEntering = false;
    setTimeout(() => {
      setDisplay('hidden');
    }, TOOLTIP_EXIT_DELAY);
  }, []);
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
  }[placement.split('-')[0]] as string;
  return (
    <Fragment>
      <div
        sx={{ width: 'fit-content' }}
        ref={reference}
        onFocus={show}
        onBlur={hide}
        onMouseLeave={hide}
        onMouseEnter={show}
      >
        {children}
      </div>
      <div
        ref={floating}
        style={{
          background: colors?.decorative_subdued as string,
          fontWeight: 'bold',
          fontSize: '14px',
          padding: '10px 6px',
          borderRadius: '4px',
          boxShadow: '2px 4px 8px 7px rgba(0, 0, 0, 0.17)',
          visibility: display,
          position: strategy,
          top: y ?? '',
          left: x ?? ''
        }}
      >
        <span sx={{ color: 'text_base', fontWeight: 500 }}>{content}</span>
        <div
          ref={arrowRef}
          style={{
            position: 'absolute',
            background: colors?.decorative_subdued as string,
            width: '8px',
            height: '8px',
            transform: 'rotate(45deg)',
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            [staticSide]: '-4px'
          }}
        />
      </div>
    </Fragment>
  );
};

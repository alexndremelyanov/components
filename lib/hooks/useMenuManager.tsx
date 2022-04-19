import {
  useFloating,
  offset,
  autoPlacement,
  arrow,
  shift
} from '@floating-ui/react-dom';
import { RefObject, useRef, useState } from 'react';
export type MenuManagerOptions =
  | {
      arrowRef: RefObject<any> | undefined;
    }
  | undefined;
export const useMenuManager = (
  { arrowRef }: MenuManagerOptions = { arrowRef: undefined }
) => {
  const emptyRef = useRef(null);
  const [display, setDisplay] = useState<'visible' | 'hidden'>('hidden');
  const show = () => {
    setDisplay('visible');
  };
  const hide = () => {
    setDisplay('hidden');
  };
  return {
    hide,
    show,
    display,
    ...useFloating({
      middleware: [
        offset(6),
        autoPlacement({
          alignment: 'end',
          autoAlignment: true,
          allowedPlacements: ['bottom']
        }),
        arrow({ element: arrowRef ? arrowRef : emptyRef }),
        shift()
      ],
      placement: 'bottom-start'
    })
  };
};

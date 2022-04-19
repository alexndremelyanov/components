import { useEffect } from 'react';

export const useClickAwayListener = (ref, callback, exceptions: any = []) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !exceptions.some(e => e?.current?.contains(event.target)) &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, exceptions]);
};

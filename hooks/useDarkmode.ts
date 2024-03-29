import { useCallback } from 'react';
import { useSnapshot } from 'valtio';

import { proxyDarkmode } from '@store/global/darkmode';

import { cookies } from '@util/common.util';

function useDarkmode(): [boolean, (mode: boolean) => void] {
  const { darkmode } = useSnapshot(proxyDarkmode);

  const onDarkmode = useCallback((mode: boolean) => {
    proxyDarkmode.darkmode = mode as boolean;
    cookies.set('darkmode', mode ? '1' : '0');
    if (mode) document.body.classList.add('darkmode');
    else document.body.classList.remove('darkmode');
  }, []);

  return [darkmode, onDarkmode];
}

export default useDarkmode;

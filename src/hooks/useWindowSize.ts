import { useState, useEffect } from 'react';

interface IWindowDimension {
  width: number | undefined;
  height: number | undefined;
}

const resizeDelay = 150;

const useWindowSize = (): IWindowDimension => {
  // on SSR, property window is undefined
  const [windowSize, setWindowSize] = useState<IWindowDimension>({
    width: window ? window.innerWidth : undefined,
    height: window ? window.innerHeight : undefined,
  });

  useEffect(() => {
    let isMounted = true;

    function handleResize(): void {
      if (isMounted) {
        let timeoutId = -1;

        clearTimeout(timeoutId);

        timeoutId = window.setTimeout(
          () =>
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            }),
          resizeDelay,
        );
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;

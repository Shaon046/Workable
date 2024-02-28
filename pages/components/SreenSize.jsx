import React, { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize(); 

    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return windowSize;
}

function ScreenSizeComponent() {
  const { width, height } = useWindowSize();

  return({height:height,width:width})
}

export default ScreenSizeComponent;

import React, { lazy, Suspense } from 'react';
import LoadComponent from './components/Loading'
const LazyLoad = (importFunc) => {
  // const LazyComponent = lazy(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(importFunc());
  //     }, 2000);
  //   });
  // });
  const LazyComponent = lazy(importFunc);
  
  return () => (
    <Suspense fallback={<LoadComponent/>}>
      <LazyComponent/>
    </Suspense>
  );
};

export default LazyLoad;
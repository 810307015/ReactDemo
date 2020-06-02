/**
 * 用来针对组件做一些公共方法的封装
 */
import React, { Suspense, lazy } from 'react';


/**
 * 通用的异步加载组件
 * 使用如下
 *  const HelloWorld = AsyncComponent(() => import('Components/test/HelloWorld'));
 */
const AsyncComponent = (importFunc) => {

  const Component = lazy(importFunc);

  return (props) => (
    <Suspense
      fallback={<div>loading...</div>}
    >
      <Component {...props} />
    </Suspense>
  )
}

export {
  AsyncComponent
};
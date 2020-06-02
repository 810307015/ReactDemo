/**
 * 用来针对组件做一些公共方法的封装
 */
import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router';

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

/**
 * 路由遍历功能
 */
const renderRoutes = (routes) => {

  return routes.map((route, index) => {
    const { children, path, exact = false } = route;
    return (
      <Route
        path={path}
        exact={exact}
        key={`${route.path}-${index}`}
        render={props => <route.component {...props} routes={children} />}
      />
    )
  })
}

export {
  AsyncComponent,
  renderRoutes
};
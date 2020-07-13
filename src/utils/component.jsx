/**
 * 用来针对组件做一些公共方法的封装
 */
import React, { Suspense, lazy, useEffect, useState } from 'react';
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

// 获取唯一的context
const getContext = (() => {
  const Context = React.createContext(null);
  Context.displayName = 'serviceProvider';

  return () => {
    return Context;
  }
})();

const defaultMapStateToProps = (data) => {
  return {
    ...data
  };
}

/**
 * 注入服务的高阶组件
 */
function ServiceProvider({ services = {}, children = null }) {
  const Context = getContext();
  const [contextValue, setContextValue] = useState({
    ...services
  });
  const unsubscribeList = [];

  useEffect(() => {
    Object.keys(services).forEach((key) => {
      const unsubscribe = services[key].subscribe(_data => {
        setContextValue({
          ...contextValue,
          ..._data
        });
      });
      unsubscribeList.push(unsubscribe);
    });

    return () => {
      unsubscribeList.forEach(unsubscribe => {
        typeof unsubscribe === 'function' && unsubscribe();
      });
    }
  }, [])

  return (
    <Context.Provider value={contextValue}>{children}</Context.Provider>
  )
}

const inject = (mapStateToProps = defaultMapStateToProps) => {
  const Context = getContext();

  return (Component) => (props) => {

    return (
      <Context.Consumer>
        {
          data => {
            const newProps = mapStateToProps(data);
            return <Component {...props} {...newProps} />
          }
        }
      </Context.Consumer>
    )
  }
}

export {
  AsyncComponent,
  renderRoutes,
  ServiceProvider,
  inject
};
/**
 * 入口父级组件
 */
import React from 'react';

import { renderRoutes } from 'Utils/component';

function Home(props) {
  const { routes } = props;

  return (
    <div className="Home">
      {
        renderRoutes(routes)
      }
    </div>
  )
}

export default Home;
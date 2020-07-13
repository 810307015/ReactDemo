/**
 * 首页
 */
import React, { useState, useEffect } from 'react';

import { inject } from 'Utils/component';

function Main(props) {
  const { history, count } = props;

  const goToHello = () => {
    history.push('/hello');
  }

  const goToSubscribe = () => {
    history.push('/subscribe');
  }

  return (
    <div className="Main">
      首页
      <div onClick={goToHello}>前往Hello页</div>
      <div onClick={goToSubscribe}>前往Subscribe页</div>
      <div>当前的count: {count}</div>
    </div>
  )
}

const mapStateToProps = (data) => {
  const {
    count
  } = data;

  return {
    count
  }
}

export default inject(mapStateToProps)(Main);
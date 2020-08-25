/**
 * 首页
 */
import React, { useState, useEffect } from 'react';

import { inject } from 'service-redux';

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
      <div onClick={goToHello}>前往Hello页(传统的redux)</div>
      <div onClick={goToSubscribe}>前往Subscribe页(使用rxjs自定义的redux)</div>
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
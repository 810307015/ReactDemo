/**
 * 首页
 */
import React from 'react';

function Main(props) {
  const { history } = props;

  const goToHello = () => {
    history.push('/hello');
  }

  return (
    <div className="Main">
      首页
      <div onClick={goToHello}>前往Hello页</div>
    </div>
  )
}

export default Main;
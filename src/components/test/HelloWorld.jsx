import React, { useState, useEffect } from 'react';

import './HelloWorld.less';

// class HelloWorld extends React.Component {

//   render() {
//     return (
//       <div className="HelloWorld">Hello World!</div>
//     );
//   }
// }

function HelloWorld(props) {

  const { msg = 'Hello World!' } = props;

  const [ isEnglish, setIsEnglish ] = useState(false);

  const handleChangeLanguage = () => {
    setIsEnglish(!isEnglish);
  }

  // 监听页面进入
  useEffect(() => {
    console.log('组件进入');

    // 监听组件即将销毁
    return () => {
      console.log('组件即将销毁');
    }
  }, []);

  // 监听props中msg的变化
  useEffect(() => {
    console.log('msg改变', props.msg)
  }, [props.msg]);

  return (
    <div className="HelloWorld" onClick={handleChangeLanguage}>
      { isEnglish ? 'Hello World!' : msg }
    </div>
  )
}

export default HelloWorld;
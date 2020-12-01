import React from 'react'
// 导入公共样式
import './common/css/index.css';
// 导入react模块

import First from './page/firstTheme';
import Second from './page/secondTheme';

const App = () => {
  return (
    <div className="App">
      <First />
      <Second />
    </div>
  );
}

export default App;

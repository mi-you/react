import React from 'react';
import ReactDOM from 'react-dom';
// react-redux 用于方便点的在react中使用redux
import { Provider } from 'react-redux'
// 持久化数据localStorage,注意store里有其处理过程
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
// 从store里获取store及副产品
import store from './store'
import App from './App';

// 经过persistStore处理的store才能传给persistor
const persistor  = persistStore(store);

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor } >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

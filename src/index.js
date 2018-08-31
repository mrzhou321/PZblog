import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import registerServiceWorker from './registerServiceWorker'
import routeConfig from './Routes/index'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { LocaleProvider } from 'antd'
import reducers from './Store/index'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'

const store = createStore(reducers,applyMiddleware(logger))
ReactDOM.render((  
<Provider store={store}>
  <LocaleProvider locale={zhCN}>
    <Router keyLength={12}>
      <div>{renderRoutes(routeConfig)} </div>
    </Router>
  </LocaleProvider>
</Provider>
 ), document.getElementById('root'))
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './samples/node-api'
import store from "./redux/redux-store";
import { Provider } from "react-redux"
import { BrowserRouter, HashRouter } from 'react-router-dom';

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  )
}

postMessage({ payload: 'removeLoading' }, '*')
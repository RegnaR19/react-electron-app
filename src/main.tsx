import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./redux/redux-store";
import { Provider } from "react-redux"
import { BrowserRouter, HashRouter } from 'react-router-dom';

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
         <BrowserRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </BrowserRouter>
   )
}
else {
   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
         <HashRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </HashRouter>
   )
}

postMessage({ payload: 'removeLoading' }, '*')
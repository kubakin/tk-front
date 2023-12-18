import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import {Provider} from "react-redux";
import {routes} from "./router";
import {store} from "./store/store";

export const BACKEND_URL = 'http://localhost:4030';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(routes)


root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
        {/*<RouterProvider router={router}/>*/}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

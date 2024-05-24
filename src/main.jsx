import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from "./redux/store.js";
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import {router} from "./navigation/router.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
)

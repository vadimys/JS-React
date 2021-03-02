import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from "./main/MainApp";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainApp/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

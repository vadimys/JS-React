import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './default/reportWebVitals';
import HW1 from "./hw1/Greeting";
import HW2_1 from "./hw2/1/Input";

ReactDOM.render(
    <React.StrictMode>
        {/*<HW1 firstName='Vadim' lastName='Zelinskyi'/>*/}
        {/*<HW2_1/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals(console.log);

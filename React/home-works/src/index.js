import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './default/reportWebVitals';
import HW1 from "./hw1/Greeting";
import HW2_1 from "./hw2/1/Input";
import HW2_2 from "./hw2/2/UserLIstApp";
import HW3_1 from "./hw3/1/RateApp";

// TODO: just uncomment line with home work
ReactDOM.render(
    <React.StrictMode>
        {/*<HW1 firstName='Vadim' lastName='Zelinskyi'/>*/}
        {/*<HW2_1/>*/}
        {/*<HW2_2/>*/}
        <HW3_1/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals(console.log);

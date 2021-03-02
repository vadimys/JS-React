import {useEffect, useState} from 'react'
import {FetchTimer} from "./FetchTimer";
import {FetchedView} from "./FetchedView";

export default function RateApp() {
    const [currencyData, setCurrencyData] = useState(<FetchedView/>);
    const [errors, setErrors] = useState(false);
    const [isReady, setReady] = useState(false);
    const getData = () => {
        setReady(false);
        fetchData();
    };

    async function fetchData() {
        const res = await fetch('https://api.ifcityevent.com/currency');

        res.json()
            .then(res => {
                setReady(true);
                setCurrencyData(res);
            })
            .catch(err => setErrors(err));
    }

    useEffect(_ => fetchData(), [setCurrencyData]);

    return (
        <div>
            {!errors ? <FetchedView data={currencyData} ready={isReady}/> : <span>No DATA received!</span>}<hr/>
            <button disabled={!isReady} onClick={getData}>Update Data</button>
            <FetchTimer fetchData={getData}/>
        </div>
    );
}

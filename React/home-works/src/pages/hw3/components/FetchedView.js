import React, {useState, useEffect} from "react";
import {Dot} from 'react-animated-dots';

export const FetchedView = ({data, ready}) => {
    const [buyRate, setBuyRate] = useState({value: 0, trend: true});
    const [sellRate, setSellRate] = useState({value: 0, trend: true});
    const trend = (value) => value ? <Dot>&#8673;</Dot> : <Dot>&#8675;</Dot>;
    const dots = <>
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
    </>;

    useEffect(_ => {
        if (data.rateBuy) {
            setBuyRate({
                value: data.rateBuy,
                trend: buyRate.value < data.rateBuy
            });
        }

        if (data.rateBuy) {
            setSellRate({
                value: data.rateSell,
                trend: sellRate.value < data.rateSell
            });
        }

    }, [data]);

    return (
        <>
            <span>Currency: {ready ? (data.name) : dots}</span><br/>
            <span>RateBuy: {ready ? data.rateBuy : dots} {buyRate.value > 0 && trend(buyRate.trend)}</span><br/>
            <span>RateSell: {ready ? data.rateSell : dots} {sellRate.value > 0 && trend(sellRate.trend)}</span>
        </>
    );
};

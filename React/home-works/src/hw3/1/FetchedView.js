import React from "react";
import {Dot} from 'react-animated-dots';

export const FetchedView = ({data, ready}) => {
    const dots = <>
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
    </>

    return (
        <>
            <span>Currency: {ready ? data.name : dots}</span><br/>
            <span>RateBuy: {ready ? data.rateBuy : dots}</span><br/>
            <span>RateSell: {ready ? data.rateSell : dots}</span>
        </>
    );
};

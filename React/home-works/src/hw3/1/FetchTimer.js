import {useEffect} from "react";

export const FetchTimer = ({fetchData}) => {
    const DELAY = 30000;

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, DELAY);

        return () => clearTimeout(timer);
    });

    return null;
};

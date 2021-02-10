import {useEffect} from "react";

export const FetchTimer = ({fetchData}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 30000);

        return () => clearTimeout(timer);
    });

    return null;
};

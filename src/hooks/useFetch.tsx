import { useState, useEffect } from "react";

export type useFetchState = {
    data: any,
    loading: boolean,
    error: string | null
}

export default function useFetch(path: string): useFetchState {
    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getData = (path: string) => {
        setLoading(true);

        fetch(path).then(res => {
            const errorObject = {
                err: true,
                statuscode: res.status,
                message: "Error in your request"
            }

            if (!res.ok) throw errorObject;

            return res.json();
        })
        .then(data => setData(data))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        getData(path);
    }, [path])

    return {data, loading, error};
}
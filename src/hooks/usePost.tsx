import { useState } from "react";

export type usePostState = {
    postData: any
    loading: boolean,
    error: string | null
}

export async function submitDetails(path: string, details: any) {
    try {
        const response = await fetch(path, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(details)
        })

        return response;
    }
    catch(err) {
        if(err) throw err;
    }
}

export default function usePost(): usePostState {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const postData = async (data: any, path: string) => {
        setLoading(true);

        const response = await submitDetails(path, data);

        if(response?.ok) {
            setLoading(false);

            alert("successful");
        }
        else {
            setLoading(false);
            const errorObject = {
                err: true,
                statuscode: response?.status,
                message: "Error in your request"
            }

            setError(errorObject as any);
        }
    }

    return {postData, loading, error};
}
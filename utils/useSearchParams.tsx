import { useState, useEffect } from 'react';

function useSearchParams(): { [key: string]: string } {
    const [params, setParams] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramsObj: { [key: string]: string } = {};

        for (const [key, value] of urlParams.entries()) {
            paramsObj[key] = value;
        }

        setParams(paramsObj);
    }, []);

    return params;
}

export default useSearchParams;

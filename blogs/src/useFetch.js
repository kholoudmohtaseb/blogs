import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {

        // Associate with specific fetch request
        const AbortCont = new AbortController();

        setTimeout (() => {
            fetch(url, {signal : AbortCont.signal})
        .then(res => {
            if (!res.ok) {
                throw Error('could not refresh data');
            }
            return res.json()
        })
        .then(data => {
            // console.log(data);
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === "AbortError") {
                console.log('fetch aborted');
            } else {
            setPending(false)
            setError(err.message);
            }
        })
        }, 1000);

        // add clean up (useEffect cleanup)
        return () => AbortCont.abort();

        }, [url]);

        return {data, pending, error}
}

export default useFetch;
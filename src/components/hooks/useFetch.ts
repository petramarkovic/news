import { useState, useEffect } from 'react'

interface FetchHookResults {
    data: MyDataType | null;
    isPending: boolean;
    error: string | null;
}

type MyDataType = {
    articles: {
        id: number;
        title: string;
        content: string;
        author: string;
        urlToImage: string;
		description: string;
        // Add other fields as needed
    }[];
};

const useFetch = (url: string): FetchHookResults  => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		fetch(url, { signal: abortCont.signal })
			.then(res => {
				if (!res.ok) {
					throw new Error('Error fetching data');
				}
				return res.json();
			})
			.then(data => {
				setData(data);
				setIsPending(false);
				setError(null);
                console.log(data)
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					return;
				} else {
					setError(err.message);
					console.log(err);
				}
			})
			return () => abortCont.abort();
	}, [url]);


	return { data, isPending, error }
};

export default useFetch;
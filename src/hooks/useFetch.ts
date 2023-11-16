import { useState, useEffect } from 'react'

type FetchHookResults<T> = {
    data: T | null;
    isPending: boolean;
    error: string | null;
}

const useFetch = <T>(url: string): FetchHookResults<T>  => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {

		fetch(url)
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
				setError(err.message);
				console.log(err);
			})
	}, [url]);


	return { data, isPending, error }
};

export default useFetch;
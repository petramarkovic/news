export const fetchData = async <T>(url: string): Promise<T> => {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error('Error fetching data');
	}

	const data: T = await res.json();
	return data;
};

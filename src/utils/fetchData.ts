export const fetchData = async <T>(url: string): Promise<T> => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error('Error fetching data');
		}

		const data: T = await res.json();
		return data;
	} catch (error: any) {
		// TODO Throwing error inside of a catch is wrong.
		// Since you use useQuery wrapper, you can omit try/catch and just throw error if response is not ok as you are already doing
		throw new Error(error?.message);
	}
};

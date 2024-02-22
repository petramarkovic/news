import { useState, useEffect } from 'react';

export const useMedia = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		const handleChange = (event: MediaQueryListEvent) => {
			setMatches(event.matches);
		};

		setMatches(mediaQuery.matches);

		// TODO Note that this will throw an error in Safari. For some reason it still uses deprecated mediaQuery.addListener()
		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
};

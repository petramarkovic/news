import { useEffect, useState } from 'react';

const useDate = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const calculateTimeUntilNextDay = () => {
			const now = new Date();
			const tomorrow = new Date(now);
			tomorrow.setDate(now.getDate() + 1);
			tomorrow.setHours(0, 0, 0, 0);
			return tomorrow.getTime() - now.getTime();
		};

		const updateDate = () => {
			setCurrentDate(new Date());
		};

		const intervalId = setInterval(updateDate, calculateTimeUntilNextDay());
		return () => clearInterval(intervalId);
	}, []);

	const formattedDate = currentDate.toDateString();

	return { formattedDate };
}

export default useDate;
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchData() {
		setIsLoading(true);

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const dataRes = await response.json();
			setData(dataRes);
		} catch (error) {
			setError(error);
		}
		//-----_setTimeout для демонстрации------//
		setTimeout(() => {
			setIsLoading(false);
		}, [250]);
		//--------- setTimeout удалить ----------//
	}

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function refetch({ params }) {
		let i = 0;
		do {
			fetchData();
			if (!error) {
				break;
			}
			i++;
		} while (i < params._limit);
	}

	return { data, isLoading, error, refetch };
};

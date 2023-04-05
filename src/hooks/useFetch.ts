import { useState, useEffect } from "react";

type FetchData<T> = {
	data: T | null;
	loading: boolean;
	error: boolean;
};

export function useFetch<T>(url: string, isFetchable: boolean): FetchData<T> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		if (isFetchable) {
			const fetchData = async () => {
				try {
					const response = await fetch(url);
					const json = await response.json();
					setData(json);
					setLoading(false);
				} catch (error) {
					setError(true);
					setLoading(false);
				}
			};

			fetchData();
		}
	}, [url, isFetchable]);

	return { data, loading, error };
}

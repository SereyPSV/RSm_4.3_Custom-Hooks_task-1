import { useState } from 'react';

type ReturnValue = [
	value: string | null,
	{
		setItem: (value: string) => void;
		removeItem: () => void;
	},
];

export function useLocalStorage(storageName: string): ReturnValue {
	const [token, setToken] = useState(getTokenStorage(storageName));

	function getTokenStorage(key: string) {
		const tokenStorage = JSON.parse(localStorage.getItem(key)!);
		if (!tokenStorage) {
			return '';
		}
		return tokenStorage;
	}

	function setItem(newToken: string) {
		if (newToken !== token) {
			setToken(newToken);
			localStorage.setItem(storageName, JSON.stringify(newToken));
		}
	}

	function removeItem() {
		if (token !== '') {
			setToken('');
			localStorage.removeItem(storageName);
		}
	}

	return [token, { setItem, removeItem }];
}

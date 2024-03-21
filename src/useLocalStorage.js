import { useState } from 'react';

export function useLocalStorage(storageName) {
	const [token, setToken] = useState(getTokenStorage(storageName));

	function getTokenStorage(key) {
		const tokenStorage = JSON.parse(localStorage.getItem(key));
		if (!tokenStorage) {
			return '';
		}
		return tokenStorage;
	}

	function setItem(newToken) {
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

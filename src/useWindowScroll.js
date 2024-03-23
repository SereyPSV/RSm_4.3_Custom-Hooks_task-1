import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

function getScroll() {
	return { x: window.scrollX, y: window.scrollY };
}

export function useWindowScroll() {
	const [scroll, setScroll] = useState(getScroll());

	const scrollTo = useCallback(({ x = 0, y }) => {
		window.scrollTo(x, y);
		setScroll({ x, y });
	}, []);

	useWindowEvent('scroll', () => setScroll(getScroll()), {
		passive: true,
	});

	return [scroll, scrollTo];
}

import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useViewportSize() {
	const [windowSizes, setWindowSizes] = useState(windowInnerSize());

	function windowInnerSize() {
		if (window.closed) {
			return { height: '0 px', width: '0 px' };
		}
		return {
			height: `${window.innerHeight} px`,
			width: `${window.innerWidth} px`,
		};
	}

	const resize = useCallback(() => {
		setWindowSizes(windowInnerSize());
	}, []);

	useWindowEvent('resize', resize);

	return { height: windowSizes.height, width: windowSizes.width };
}

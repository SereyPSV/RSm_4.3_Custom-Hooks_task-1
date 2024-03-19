import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';
import { windowInnerSize } from '../utils/windowInnerSize';

export function useViewportSize() {
	const [windowSizes, setWindowSizes] = useState(windowInnerSize());

	const resize = useCallback(() => {
		setWindowSizes(windowInnerSize());
	}, []);

	useWindowEvent('resize', resize);

	return { height: windowSizes.height, width: windowSizes.width };
}

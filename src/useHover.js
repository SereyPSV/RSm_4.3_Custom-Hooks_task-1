import { useState, useRef, useEffect } from 'react';

export function useHover() {
	const [hovered, setHovered] = useState(false);
	const ref = useRef(null);

	const handleMouseOver = () => setHovered(true);
	const handleMouseOut = () => setHovered(false);

	useEffect(() => {
		const el = ref.current;
		if (el) {
			el.addEventListener('mouseover', handleMouseOver);
			el.addEventListener('mouseout', handleMouseOut);

			return () => {
				el.removeEventListener('mouseover', handleMouseOver);
				el.removeEventListener('mouseout', handleMouseOut);
			};
		}
	}, []);

	return { hovered, ref };
}

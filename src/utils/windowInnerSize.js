export function windowInnerSize() {
	if (window.closed) {
		return { height: '0 px', width: '0 px' };
	}
	return {
		height: `${window.innerHeight} px`,
		width: `${window.innerWidth} px`,
	};
}

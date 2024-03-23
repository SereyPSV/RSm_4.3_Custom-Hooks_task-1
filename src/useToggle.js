import { useReducer } from 'react';

const initialState = (values) => {
	if (typeof values === 'string') {
		return { index: 0, values: [values] };
	}

	if (Array.isArray(values)) {
		return { index: 0, values };
	}

	return { index: 0, values: ['true', 'false'] };
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'toggle':
			return {
				...state,
				index: (state.index + 1) % state.values.length,
			};
		default:
			return state;
	}
};

export function useToggle(values) {
	const [state, dispatch] = useReducer(reducer, initialState(values));
	const value = state.values[state.index];
	const toggle = () => dispatch({ type: 'toggle' });
	return [value, toggle];
}

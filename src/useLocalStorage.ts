type ReturnValue = [
	value: string | null,
	{
		setItem: (value: string) => void;
		removeItem: () => void;
	},
];

type UseLocalStorage = (key: string) => ReturnValue;

export function useLocalStorage() {}

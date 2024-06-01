import {useEffect, useState} from 'react';

export const useDebounceValue = <T extends unknown>(value: T, delay: number, force?: boolean) => {
	const [currentV, setCurrentV] = useState<T>(value);

	useEffect(() => {
		if (currentV === value) return;
		if (force) {
			setCurrentV(value);
			return;
		}
		const  handler = setTimeout(() => setCurrentV(value), delay);
		return () => clearTimeout(handler);
	}, [value, force]);

	return currentV;
};
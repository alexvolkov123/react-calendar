import { useCallback } from 'react'

import { StorageTypes } from './types'

export const useLocalStorage = () => {
	const getFromStorage = useCallback(
		(value: StorageTypes) => JSON.parse(localStorage.getItem(value) || 'null'),
		[]
	)

	const setToStorage = useCallback((key: StorageTypes, value: any): void => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [])

	return {
		getFromStorage,
		setToStorage,
	}
}

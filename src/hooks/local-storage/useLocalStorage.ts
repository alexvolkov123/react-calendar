import { useCallback } from 'react'

import { ThemeTypes } from '../../contexts/theme/theme-types'
import { User } from '../../types/types'
import { LocalStorageFieldsEnum, StorageTypes } from './types'

export const useLocalStorage = () => {
	const getFromStorage = useCallback((value: StorageTypes) => {
		return JSON.parse(localStorage.getItem(value) || 'null')
	}, [])

	const setToStorage = useCallback((key: StorageTypes, value: any): void => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [])

	const getModeFromStorage = useCallback(
		() => (localStorage.getItem('mode') || 'blue') as ThemeTypes,
		[]
	)

	const getUserFromStorage = useCallback((): User | null => {
		return getFromStorage(LocalStorageFieldsEnum.user)
	}, [getFromStorage])

	const setUserToStorage = useCallback(
		(user: User | null): void => {
			setToStorage(LocalStorageFieldsEnum.user, user)
		},
		[setToStorage]
	)

	const getUsers = useCallback((): User[] => {
		return getFromStorage(LocalStorageFieldsEnum.users)
			? getFromStorage(LocalStorageFieldsEnum.users)
			: []
	}, [getFromStorage])

	const getUserByEmail = useCallback(
		(email: string): User => {
			return getUsers().filter(user => user.email === email)[0]
		},
		[getUsers]
	)

	const addUserToUsers = useCallback(
		(user: User): void => {
			setToStorage(LocalStorageFieldsEnum.users, [...getUsers(), user])
		},
		[getUsers, setToStorage]
	)

	const updateUsers = useCallback((): void => {
		const newUsers = getUsers().filter(
			newUser => newUser.email !== getUserFromStorage()?.email
		)
		setToStorage(LocalStorageFieldsEnum.users, [
			...newUsers,
			getUserFromStorage(),
		])
	}, [getUserFromStorage, getUsers, setToStorage])

	return {
		getUserByEmail,
		getFromStorage,
		setToStorage,
		getUserFromStorage,
		setUserToStorage,
		getModeFromStorage,
		addUserToUsers,
		updateUsers,
	}
}

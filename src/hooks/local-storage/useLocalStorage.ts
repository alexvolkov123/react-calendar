import { useCallback } from 'react'

import { IUser } from '../../types/types'
import { localStorageTypes, storageTypes } from './types'

export const useLocalStorage = () => {
	const getFromStorage = useCallback((value: storageTypes) => {
		return JSON.parse(localStorage.getItem(value) || 'null')
	}, [])

	const setToStorage = useCallback((key: storageTypes, value: any): void => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [])

	const getUserFromStorage = useCallback((): IUser | null => {
		return getFromStorage(localStorageTypes.user)
	}, [getFromStorage])

	const setUserToStorage = useCallback(
		(user: IUser | null): void => {
			setToStorage(localStorageTypes.user, user)
		},
		[setToStorage]
	)

	const getUsers = useCallback((): IUser[] => {
		return getFromStorage(localStorageTypes.users)
			? getFromStorage(localStorageTypes.users)
			: []
	}, [getFromStorage])

	const getUserByEmail = useCallback(
		(email: string): IUser => {
			return getUsers().filter(user => user.email === email)[0]
		},
		[getUsers]
	)

	const addUserToUsers = useCallback(
		(user: IUser): void => {
			setToStorage(localStorageTypes.users, [...getUsers(), user])
		},
		[getUsers, setToStorage]
	)

	const updateUsers = useCallback((): void => {
		const newUsers = getUsers().filter(
			newUser => newUser.email !== getUserFromStorage()!.email
		)
		setToStorage(localStorageTypes.users, [...newUsers, getUserFromStorage()])
	}, [getUserFromStorage, getUsers, setToStorage])

	return {
		getUserByEmail,
		getFromStorage,
		setToStorage,
		getUserFromStorage,
		setUserToStorage,
		addUserToUsers,
		updateUsers,
	}
}

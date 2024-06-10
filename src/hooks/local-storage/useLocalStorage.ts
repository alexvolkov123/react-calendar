import { IUser } from '../../types/types'
import { localStorageTypes, storageTypes } from './types'

export const useLocalStorage = () => {
	const getFromStorage = (value: storageTypes) => {
		return JSON.parse(localStorage.getItem(value) || 'null')
	}
	const setToStorage = (key: storageTypes, value: any) => {
		localStorage.setItem(key, JSON.stringify(value))
	}

	const getUserFromStorage = (): IUser | null => {
		return getFromStorage(localStorageTypes.user)
	}

	const setUserToStorage = (user: IUser | null) => {
		setToStorage(localStorageTypes.user, user)
	}

	const getUserByEmail = (email: string) => {
		return getUsers().filter(user => user.email === email)[0]
	}

	const getUsers = (): IUser[] => {
		return getFromStorage(localStorageTypes.users)
			? getFromStorage(localStorageTypes.users)
			: []
	}

	const addUserToUsers = (user: IUser) => {
		setToStorage(localStorageTypes.users, [...getUsers(), user])
	}

	const updateUsers = () => {
		const newUsers = getUsers().filter(
			newUser => newUser.email !== getUserFromStorage()!.email
		)

		setToStorage(localStorageTypes.users, [...newUsers, getUserFromStorage()])
	}

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

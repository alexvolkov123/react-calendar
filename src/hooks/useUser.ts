import { useCallback, useEffect, useMemo, useState } from 'react'

import { User } from '../types/types'
import { LocalStorageFieldsEnum } from './local-storage/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useUser = () => {
	const { getFromStorage, setToStorage } = useLocalStorage()

	const [user, setUser] = useState<User | null>({} as User)
	const getUserFromStorage = useCallback(
		(): User | null => getFromStorage(LocalStorageFieldsEnum.user),
		[getFromStorage]
	)

	const setUserToStorage = useCallback(
		(user: User | null): void => {
			setToStorage(LocalStorageFieldsEnum.user, user)
		},
		[setToStorage]
	)

	const users = useMemo(
		(): User[] =>
			getFromStorage(LocalStorageFieldsEnum.users)
				? getFromStorage(LocalStorageFieldsEnum.users)
				: [],
		[getFromStorage]
	)

	const getUserByEmail = useCallback(
		(email: string): User => users.filter(user => user.email === email)[0],
		[users]
	)

	const addUserToUsers = useCallback(
		(user: User): void => {
			setToStorage(LocalStorageFieldsEnum.users, [...users, user])
		},
		[users, setToStorage]
	)

	const updateUsers = useCallback((): void => {
		const newUsers = users.filter(
			newUser => newUser.email !== getUserFromStorage()?.email
		)
		setToStorage(LocalStorageFieldsEnum.users, [
			...newUsers,
			getUserFromStorage(),
		])
	}, [getUserFromStorage, users, setToStorage])

	const addUser = useCallback(
		(email: string): void => {
			const user = getUserByEmail(email)

			setUser(user)
			setUserToStorage(user)
		},
		[getUserByEmail, setUserToStorage]
	)

	const registerUser = useCallback(
		(user: User): void => {
			setUser(user)
			setUserToStorage(user)
			addUserToUsers(user)
		},
		[addUserToUsers, setUserToStorage]
	)

	const removeUser = useCallback((): void => {
		updateUsers()
		setUserToStorage(null)
		setUser(null)
	}, [setUserToStorage, updateUsers])

	const isUserExist = useCallback(
		(email: string): boolean => {
			const user = getUserByEmail(email)
			return !!user
		},
		[getUserByEmail]
	)

	const isPasswordMatch = useCallback(
		(user: User): boolean =>
			user.password === getUserByEmail(user.email).password,
		[getUserByEmail]
	)

	useEffect(() => setUser(getUserFromStorage()), [getUserFromStorage])

	return {
		user,
		setUser,

		removeUser,
		registerUser,
		addUser,

		isUserExist,
		isPasswordMatch,

		getUserByEmail,
		getUserFromStorage,
		setUserToStorage,
		addUserToUsers,
		updateUsers,
	}
}

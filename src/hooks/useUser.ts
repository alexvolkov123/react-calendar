import { useCallback, useEffect, useState } from 'react'

import { User } from '../types/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useUser = () => {
	const {
		getUserFromStorage,
		setUserToStorage,
		getUserByEmail,
		addUserToUsers,
		updateUsers,
	} = useLocalStorage()

	const [user, setUser] = useState<User | null>({} as User)
	useEffect(() => setUser(getUserFromStorage()), [getUserFromStorage])

	const addUser = useCallback(
		(email: string): void => {
			setUser(getUserByEmail(email))
			setUserToStorage(getUserByEmail(email))
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
		(user: User): boolean => {
			return user.password === getUserByEmail(user.email).password
		},
		[getUserByEmail]
	)

	return {
		user,

		removeUser,
		registerUser,
		addUser,
		isUserExist,
		isPasswordMatch,
		setUser,
	}
}

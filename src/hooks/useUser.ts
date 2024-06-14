import { useCallback, useState } from 'react'

import { IUser } from '../types/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useUser = () => {
	const {
		getUserFromStorage,
		setUserToStorage,
		getUserByEmail,
		addUserToUsers,
		updateUsers,
	} = useLocalStorage()

	const [editedDay, setEditedDay] = useState(new Date())

	const [user, setUser] = useState<IUser | null>(getUserFromStorage())

	const addUser = useCallback(
		(email: string): void => {
			setUser(getUserByEmail(email))
			setUserToStorage(getUserByEmail(email))
		},
		[getUserByEmail, setUserToStorage]
	)

	const registerUser = useCallback(
		(user: IUser): void => {
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
		(user: IUser): boolean => {
			return user.password === getUserByEmail(user.email).password
		},
		[getUserByEmail]
	)

	return {
		user,
		editedDay,

		removeUser,
		registerUser,
		addUser,
		isUserExist,
		isPasswordMatch,
		setUser,
		setEditedDay,
	}
}

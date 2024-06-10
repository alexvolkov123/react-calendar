import { useState } from 'react'

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

	const addUser = (email: string) => {
		setUser(getUserByEmail(email))
		setUserToStorage(getUserByEmail(email))
	}

	const registerUser = (user: IUser) => {
		setUser(user)
		setUserToStorage(user)
		addUserToUsers(user)
	}

	const removeUser = () => {
		updateUsers()
		setUserToStorage(null)
		setUser(null)
	}

	const isUserExist = (email: string) => {
		const user = getUserByEmail(email)
		return !!user
	}

	const isPasswordMatch = (user: IUser) => {
		return user.password === getUserByEmail(user.email).password
	}

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

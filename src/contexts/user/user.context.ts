import { createContext, useState } from 'react'
import { ITask, IUser, IUserContext } from '../../types/types'

export const useUser = () => {
	const [tasks, setTasks] = useState<ITask[]>(getCurrentUser().tasks)

	function addUser(email: string) {
		setCurrentUser(getUserByEmail(email))
		setTasks(getCurrentUser().tasks)
	}
	function registerUser(user: IUser) {
		setCurrentUser(user)
		addUserToUsers(user.email)
	}

	function getCurrentUser() {
		return localStorage.getItem('currentUser')
			? JSON.parse(localStorage.getItem('currentUser')!)
			: {}
	}
	function setCurrentUser(user: IUser) {
		localStorage.setItem('currentUser', JSON.stringify(user))
	}

	function isUserExist(email: string) {
		const user = getUserByEmail(email)
		return !!user
	}

	function getUserByEmail(email: string) {
		return getUsers().filter(user => user.email === email)[0]
	}

	function getUsers(): IUser[] {
		return localStorage.getItem('users')
			? JSON.parse(localStorage.getItem('users')!)
			: []
	}

	function addUserToUsers(email: string) {
		!isUserExist(email) &&
			localStorage.setItem(
				'users',
				JSON.stringify([...getUsers(), getCurrentUser()])
			)
	}
	function updateUsers(email: string) {
		const newUsers = getUsers().filter(user => user.email !== email)

		localStorage.setItem(
			'users',
			JSON.stringify([...newUsers, getCurrentUser()])
		)
	}

	function removeUser() {
		updateUsers(getCurrentUser().email)
		setCurrentUser({} as IUser)
		setTasks([])
	}

	function getUserTasks() {
		return tasks ? tasks : getCurrentUser().tasks
	}
	function setUserTasks(tasks: ITask[]) {
		localStorage.setItem(
			'currentUser',
			JSON.stringify({ ...getCurrentUser(), tasks })
		)
		setTasks(tasks)
	}

	function isPasswordMatch(user: IUser) {
		return user.password === getUserByEmail(user.email).password
	}

	return {
		removeUser,
		registerUser,
		addUser,
		getUserTasks,
		setUserTasks,
		isUserExist,
		isPasswordMatch,
	}
}

export const UserContext = createContext<IUserContext>({} as IUserContext)

import { ITask, IUser } from '../types/types'
import { useActions } from './useActions'
import { useTypedSelector } from './useTypedSelector'

export function useUser() {
	const { AddUser, SetUserTasks } = useActions()
	const tasks = useTypedSelector(state => state.user.tasks)

	function addUser(email: string) {
		setCurrentUser(getUserByEmail(email))
		setUserTasks(getUserByEmail(email).tasks)
	}

	function registerUser(user: IUser) {
		setCurrentUser(user)
		addUserToUsers(user.email)
	}

	function removeUser() {
		updateUsers(getCurrentUser().email)
		setUserTasks([])
		setCurrentUser({} as IUser)
	}

	function getCurrentUser(): IUser {
		return localStorage.getItem('currentUser')
			? JSON.parse(localStorage.getItem('currentUser')!)
			: {}
	}
	function setCurrentUser(user: IUser) {
		AddUser(user)
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

	function getUserTasks(): ITask[] {
		return tasks || getCurrentUser().tasks
	}
	function setUserTasks(tasks: ITask[]) {
		localStorage.setItem(
			'currentUser',
			JSON.stringify({ ...getCurrentUser(), tasks })
		)
		SetUserTasks(tasks)
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

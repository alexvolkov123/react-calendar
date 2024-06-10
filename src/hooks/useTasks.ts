import { format } from 'date-fns'
import { useContext } from 'react'

import { UserContext } from '../contexts/user/user.context'
import { ITask } from '../types/types'
import { localStorageTypes } from './local-storage/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useTasks = () => {
	const { user, editedDay, setUser } = useContext(UserContext)
	const { setToStorage, getUserFromStorage } = useLocalStorage()

	const getUserTasks = () => {
		return user ? user!.tasks : []
	}
	const setUserTasks = (tasks: ITask[]) => {
		setToStorage(localStorageTypes.user, { ...getUserFromStorage(), tasks })
		setUser({ ...user!, tasks })
	}

	const getFilteredUserTasks = () => {
		return getUserTasks()
			? getUserTasks().filter(
					task =>
						format(task.date, 'yyyy-MM-dd') === format(editedDay, 'yyyy-MM-dd')
			  )
			: []
	}

	const isExistEditedTasks = (day: Date) => {
		return getUserTasks()
			? getUserTasks().filter(
					task => format(task.date, 'yyyy MM dd') === format(day, 'yyyy MM dd')
			  ).length > 0
			: false
	}

	return {
		getUserTasks,
		setUserTasks,
		getFilteredUserTasks,
		isExistEditedTasks,
	}
}

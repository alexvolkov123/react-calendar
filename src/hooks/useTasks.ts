import { format } from 'date-fns'
import { useCallback, useContext, useMemo } from 'react'

import { UserContext } from '../contexts/user/user.context'
import { ITask } from '../types/types'
import { localStorageTypes } from './local-storage/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useTasks = () => {
	const { user, editedDay, setUser } = useContext(UserContext)
	const { setToStorage, getUserFromStorage } = useLocalStorage()

	const getUserTasks = useMemo((): ITask[] => {
		return user ? user!.tasks : []
	}, [user])

	const setUserTasks = useCallback(
		(tasks: ITask[]): void => {
			setToStorage(localStorageTypes.user, { ...getUserFromStorage(), tasks })
			setUser({ ...user!, tasks })
		},
		[getUserFromStorage, setToStorage, setUser, user]
	)

	const getFilteredUserTasks = useMemo((): ITask[] => {
		return getUserTasks
			? getUserTasks.filter(
					task =>
						format(task.date, 'yyyy-MM-dd') === format(editedDay, 'yyyy-MM-dd')
			  )
			: []
	}, [editedDay, getUserTasks])

	const isExistEditedTasks = useCallback(
		(day: Date): boolean => {
			return getUserTasks
				? getUserTasks.filter(
						task =>
							format(task.date, 'yyyy MM dd') === format(day, 'yyyy MM dd')
				  ).length > 0
				: false
		},
		[getUserTasks]
	)

	return {
		getUserTasks,
		setUserTasks,
		getFilteredUserTasks,
		isExistEditedTasks,
	}
}

import { format } from 'date-fns'
import { useCallback, useContext } from 'react'

import { CalendarContext } from '../contexts/calendar/calendar-context'
import { UserContext } from '../contexts/user/user.context'
import { Task } from '../types/types'
import { LocalStorageFieldsEnum } from './local-storage/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useTasks = () => {
	const { user, setUser } = useContext(UserContext)
	const { editedDay } = useContext(CalendarContext)
	const { setToStorage, getUserFromStorage } = useLocalStorage()

	const getUserTasks = useCallback((): Task[] => {
		return user ? user.tasks : []
	}, [user])

	const setUserTasks = useCallback(
		(tasks: Task[]): void => {
			setToStorage(LocalStorageFieldsEnum.user, {
				...getUserFromStorage(),
				tasks,
			})
			user && setUser({ ...user, tasks })
		},
		[getUserFromStorage, setToStorage, setUser, user]
	)

	const getFilteredUserTasks = useCallback((): Task[] => {
		return getUserTasks()
			? getUserTasks().filter(
					task =>
						format(task.date, 'yyyy-MM-dd') === format(editedDay, 'yyyy-MM-dd')
			  )
			: []
	}, [editedDay, getUserTasks])

	const isExistEditedTasks = useCallback(
		(day: Date): boolean => {
			return getUserTasks()
				? getUserTasks().filter(
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

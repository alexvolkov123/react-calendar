import { format } from 'date-fns'
import { useCallback, useContext, useMemo } from 'react'

import { CalendarContext } from '../contexts/calendar/calendar-context'
import { UserContext } from '../contexts/user/user.context'
import { Task } from '../types/types'
import { LocalStorageFieldsEnum } from './local-storage/types'
import { useLocalStorage } from './local-storage/useLocalStorage'

export const useTasks = () => {
	const { user, setUser, getUserFromStorage } = useContext(UserContext)
	const { editedDay } = useContext(CalendarContext)
	const { setToStorage } = useLocalStorage()

	const userTasks = useMemo((): Task[] => user?.tasks ?? [], [user])

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

	const filteredUserTasks = useMemo(
		(): Task[] =>
			userTasks.filter(
				task =>
					format(task.date, 'yyyy-MM-dd') === format(editedDay, 'yyyy-MM-dd')
			),
		[editedDay, userTasks]
	)

	const isExistEditedTasks = useCallback(
		(day: Date): boolean =>
			userTasks.filter(
				task => format(task.date, 'yyyy MM dd') === format(day, 'yyyy MM dd')
			).length > 0,
		[userTasks]
	)

	return {
		userTasks,
		setUserTasks,
		filteredUserTasks,
		isExistEditedTasks,
	}
}

import { useContext } from 'react'
import { inputTypes } from '../components/form-input/form-input-props'
import { CalendarContext } from '../contexts/calendar/calendar-context'
import { ITask } from '../types/types'
import { notify } from '../utils/notify/notify'
import { notifyMessages } from '../utils/notify/notify-messages'
import { useTasks } from './useTasks'

export const useDialog = () => {
	const { setIsCreateDialog, setIsEditDialog } = useContext(CalendarContext)
	const { setUserTasks, getUserTasks, getFilteredUserTasks } = useTasks()

	const getInputNames = (): inputTypes[] => {
		return ['title', 'date', 'description']
	}

	const closeCreateDialog = (task?: ITask) => {
		setIsCreateDialog(false)
		task && setUserTasks([...getUserTasks(), task])
	}

	const closeEditDialog = () => {
		setIsEditDialog(false)
	}

	const deleteTask = (id: string) => {
		const newTasks = getUserTasks().filter(task => task.id !== id)
		const tasksLength = getFilteredUserTasks().filter(task => task.id !== id)

		setUserTasks(newTasks)
		notify(notifyMessages.deletedTask)

		tasksLength.length === 0 && closeEditDialog()
	}

	return {
		getInputNames,
		closeCreateDialog,
		closeEditDialog,
		deleteTask,
	}
}

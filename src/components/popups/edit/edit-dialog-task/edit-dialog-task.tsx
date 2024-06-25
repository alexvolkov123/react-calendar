import { RemoveCircleOutlineRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { memo, useCallback } from 'react'

import { useTasks } from '../../../../hooks/useTasks'
import { notify } from '../../../../utils/notify/notify'
import { EditDialogTaskProps } from './props'

export const EditDialogTask = memo(({ task, onClose }: EditDialogTaskProps) => {
	const { userTasks, setUserTasks, filteredUserTasks } = useTasks()

	const updateTasks = useCallback(
		(id: string) => {
			const newTasks = userTasks.filter(task => task.id !== id)

			setUserTasks(newTasks)

			notify('You successfully deleted the task')
		},
		[setUserTasks, userTasks]
	)

	const deleteTask = useCallback(
		(id: string) => {
			const tasksLength = filteredUserTasks.filter(task => task.id !== id)
			tasksLength.length === 0 && onClose()

			updateTasks(id)
		},
		[filteredUserTasks, onClose, updateTasks]
	)

	return (
		<li className='dialog-task'>
			<div className='dialog-task__title'>{task.title}</div>
			<IconButton onClick={() => deleteTask(task.id)}>
				<RemoveCircleOutlineRounded />
			</IconButton>
		</li>
	)
})

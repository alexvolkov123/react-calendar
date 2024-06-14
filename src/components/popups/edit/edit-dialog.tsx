import { Dialog } from '@mui/material'
import { format } from 'date-fns'
import { memo, useContext } from 'react'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import { useDialog } from '../../../hooks/useDialog'
import { useTasks } from '../../../hooks/useTasks'
import { Title } from '../../title/title'
import { EditDialogTask } from './edit-dialog-task/edit-dialog-task'
import './edit-dialog.css'

export const EditDialog = memo(() => {
	const { isEditDialog } = useContext(CalendarContext)
	const { getFilteredUserTasks } = useTasks()
	const { closeEditDialog } = useDialog()

	const getTitle = (): string => {
		return getFilteredUserTasks.length > 0
			? format(getFilteredUserTasks[0].date, 'dd.MM.yyyy')
			: 'Нет событий'
	}

	return (
		<Dialog onClose={() => closeEditDialog()} open={isEditDialog}>
			<div className='dialog'>
				<Title>{getTitle()}</Title>
				<ul className='dialog-tasks' hidden={getFilteredUserTasks.length === 0}>
					{getFilteredUserTasks.map(task => {
						return <EditDialogTask key={task.id} task={task} />
					})}
				</ul>
			</div>
		</Dialog>
	)
})

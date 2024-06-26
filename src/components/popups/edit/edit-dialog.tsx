import { Dialog } from '@mui/material'
import { format } from 'date-fns'
import { memo, useCallback, useContext, useMemo } from 'react'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import { useTasks } from '../../../hooks/useTasks'
import { Title } from '../../ui/title/title'
import { EditDialogTask } from './edit-dialog-task/edit-dialog-task'
import './edit-dialog.css'

export const EditDialog = memo(() => {
	const { openEditDialog, setOpenEditDialog } = useContext(CalendarContext)

	const { filteredUserTasks } = useTasks()

	const title = useMemo(
		(): string =>
			filteredUserTasks.length > 0
				? format(filteredUserTasks[0].date, 'dd.MM.yyyy')
				: 'Нет событий',
		[filteredUserTasks]
	)

	const closeEditDialog = useCallback(() => {
		setOpenEditDialog(false)
	}, [setOpenEditDialog])

	return (
		<Dialog onClose={closeEditDialog} open={openEditDialog}>
			<div className='dialog'>
				<Title>{title}</Title>
				<ul className='dialog-tasks' hidden={filteredUserTasks.length === 0}>
					{filteredUserTasks.map(task => (
						<EditDialogTask
							key={task.id}
							task={task}
							onClose={closeEditDialog}
						/>
					))}
				</ul>
			</div>
		</Dialog>
	)
})

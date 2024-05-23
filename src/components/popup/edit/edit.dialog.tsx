import { RemoveCircleOutlineRounded } from '@mui/icons-material'
import { Dialog, IconButton } from '@mui/material'
import { format } from 'date-fns'

import { IEditDialogProps } from '../../../types/types'
import './edit.dialog.css'

export function EditDialog(props: IEditDialogProps) {
	const { tasks, setTasks, open, onClose } = props

	function deleteTask(id: string) {
		const newTasks = tasks.filter(task => task.id !== id)

		setTasks(newTasks)

		newTasks.length === 0 && onClose()
	}

	return (
		<Dialog onClose={() => onClose()} open={open}>
			<div className='dialog-title'>
				{tasks.length > 0 ? format(tasks[0].date, 'dd.MM.yyyy') : ''}
			</div>
			<ul className='dialog-tasks'>
				{tasks.map(task => {
					return (
						<li className='dialog-task' key={task.id}>
							<div className='dialog-task__title'>{task.title}</div>
							<IconButton onClick={() => deleteTask(task.id)}>
								<RemoveCircleOutlineRounded />
							</IconButton>
						</li>
					)
				})}
			</ul>
		</Dialog>
	)
}

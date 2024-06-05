import { RemoveCircleOutlineRounded } from '@mui/icons-material'
import { Dialog, IconButton } from '@mui/material'
import { format } from 'date-fns'
import { useContext } from 'react'

import { UserContext } from '../../../contexts/user/user.context'
import { notify } from '../../../services/notify.service'
import { IEditDialogProps, notifyTypes } from '../../../types/types'
import './edit.dialog.css'

export function EditDialog(props: IEditDialogProps) {
	const { open, onClose, tasks } = props
	const { getUserTasks, setUserTasks } = useContext(UserContext)

	function deleteTask(id: string) {
		const newTasks = getUserTasks().filter(task => task.id !== id)
		const tasksLength = tasks.filter(task => task.id !== id)

		setUserTasks(newTasks)
		notify('You successfully deleted this task', notifyTypes.success)

		tasksLength.length === 0 && onClose()
	}

	return (
		<Dialog onClose={() => onClose()} open={open}>
			<div className={tasks.length === 0 ? 'dialog' : ''}>
				<div className='dialog-title'>
					{tasks.length > 0
						? format(tasks[0].date, 'dd.MM.yyyy')
						: 'Нет событий'}
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
			</div>
		</Dialog>
	)
}

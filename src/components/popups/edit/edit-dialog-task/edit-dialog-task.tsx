import { RemoveCircleOutlineRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { memo } from 'react'

import { useDialog } from '../../../../hooks/useDialog'
import { ITask } from '../../../../types/types'

export const EditDialogTask = memo(({ task }: { task: ITask }) => {
	const { deleteTask } = useDialog()

	return (
		<li className='dialog-task'>
			<div className='dialog-task__title'>{task.title}</div>
			<IconButton onClick={() => deleteTask(task.id)}>
				<RemoveCircleOutlineRounded />
			</IconButton>
		</li>
	)
})

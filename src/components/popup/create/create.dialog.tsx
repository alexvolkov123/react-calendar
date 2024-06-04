import { Button, Dialog, Stack, TextField, Typography } from '@mui/material'

import { SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { notify } from '../../../services/notify.service'
import { notifyTypes } from '../../../types/notify'
import { ICreateDialogProps } from '../../../types/props'
import { ITask } from '../../../types/types'

export function CreateDialog(props: ICreateDialogProps) {
	const { onClose, open } = props
	const id = uuidv4()

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<ITask>({
		mode: 'all',
		shouldFocusError: false,
	})

	const handleClose = () => onClose()

	const onSubmit: SubmitHandler<ITask> = (data: ITask) => {
		reset()
		notify('You successfully created the task', notifyTypes.success)
		return onClose({ ...data, id })
	}

	return (
		<Dialog onClose={handleClose} open={open}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={3} alignItems={'center'}>
					<Typography fontSize={20} color='primary'>
						Create Event
					</Typography>

					<TextField
						{...register('title', { required: 'Title is required' })}
						label='Title'
						variant='outlined'
						error={!!errors.title}
						helperText={errors.title?.message}
					/>
					<TextField
						{...register('date', { required: 'Date is required' })}
						type='date'
						variant='outlined'
						error={!!errors.date}
						helperText={errors.date?.message}
					/>
					<TextField
						{...register('description')}
						label='Description'
						variant='outlined'
						error={!!errors.description}
						helperText={errors.description?.message}
					/>

					<Button
						disabled={!isValid}
						variant='contained'
						id='submitTask'
						type='submit'
					>
						Access
					</Button>
				</Stack>
			</form>
		</Dialog>
	)
}

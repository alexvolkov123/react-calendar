import { Dialog, Stack } from '@mui/material'

import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import { useDialog } from '../../../hooks/useDialog'
import { ITask, IUser } from '../../../types/types'
import { notify } from '../../../utils/notify/notify'
import { inputValidations } from '../../../validation'
import { FormButton } from '../../form-button/form-button'
import { FormInput } from '../../form-input/form-input'
import { Title } from '../../title/title'

export const CreateDialog = () => {
	const { isCreateDialog } = useContext(CalendarContext)

	const { getInputNames, closeCreateDialog } = useDialog()
	const id = uuidv4()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<ITask & IUser>({
		mode: 'onTouched',
		shouldFocusError: false,
	})

	const onSubmit: SubmitHandler<ITask> = (data: ITask) => {
		reset()
		notify('You successfully created the task')
		return closeCreateDialog({ ...data, id })
	}

	return (
		<Dialog onClose={() => closeCreateDialog()} open={isCreateDialog}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={3} alignItems={'center'}>
					<Title text='Create Task'></Title>
					{getInputNames().map(inputName => (
						<FormInput
							key={inputName}
							register={register}
							name={inputName}
							validation={inputValidations[inputName] || {}}
							errors={errors}
							type={inputName}
						/>
					))}

					<FormButton
						label='Create'
						disabled={!isValid}
						id='submitTask'
					></FormButton>
				</Stack>
			</form>
		</Dialog>
	)
}

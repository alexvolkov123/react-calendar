import { Dialog } from '@mui/material'
import { memo, useCallback, useContext, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import { useTasks } from '../../../hooks/useTasks'
import { Task } from '../../../types/types'
import { formConfig } from '../../../utils/form-config/form-config'
import { notify } from '../../../utils/notify/notify'
import { createTaskInputValidations } from '../../../validation'
import { FormButton } from '../../ui/form-button/form-button'
import { FormInput } from '../../ui/form-input/form-input'
import { CreateTaskInputs } from '../../ui/form-input/form-input-props'
import { FormStack } from '../../ui/form-stack/form-stack'
import { Title } from '../../ui/title/title'

export const CreateDialog = memo(() => {
	const { isCreateDialog, setIsCreateDialog } = useContext(CalendarContext)
	const { userTasks, setUserTasks } = useTasks()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<Task>(formConfig)

	const dialogInputs = useMemo((): CreateTaskInputs[] => {
		return ['title', 'date', 'description']
	}, [])

	const id: string = uuidv4()

	const closeCreateDialog = useCallback(() => {
		reset()
		setIsCreateDialog(false)
	}, [reset, setIsCreateDialog])

	const onSubmit: SubmitHandler<Task> = useCallback(
		(data: Task) => {
			notify('You successfully created the task')
			data && setUserTasks([...userTasks, data])
			closeCreateDialog()
		},
		[closeCreateDialog, userTasks, setUserTasks]
	)

	return (
		<Dialog onClose={closeCreateDialog} open={isCreateDialog}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormStack>
					<Title>Create Task</Title>
					{dialogInputs.map(inputName => (
						<FormInput<Task, CreateTaskInputs>
							key={inputName}
							register={register}
							name={inputName}
							validation={createTaskInputValidations[inputName]}
							errors={errors}
							type={inputName}
						/>
					))}

					<FormButton
						label='Create'
						disabled={!isValid}
						id='submitTask'
					></FormButton>
				</FormStack>
			</form>
		</Dialog>
	)
})

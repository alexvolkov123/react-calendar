import { memo, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { User } from '../../../types/types'
import { formConfig } from '../../../utils/form-config/form-config'
import { authInputValidations } from '../../../validation'
import { FormButton } from '../../ui/form-button/form-button'
import { FormInput } from '../../ui/form-input/form-input'
import { AuthInputs } from '../../ui/form-input/form-input-props'
import { FormStack } from '../../ui/form-stack/form-stack'
import { Title } from '../../ui/title/title'
import './auth-form.css'
import { AuthFormProps } from './props'

export const AuthForm = memo(({ title, inputs, onSubmit }: AuthFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<User>(formConfig)

	const handleOnSubmit: SubmitHandler<User> = useCallback(
		(data: User): void => {
			onSubmit(data)
			reset()
		},
		[onSubmit, reset]
	)

	return (
		<form onSubmit={handleSubmit(handleOnSubmit)} className='form'>
			<FormStack>
				<Title>{title}</Title>
				{inputs.map(inputName => (
					<FormInput<User, AuthInputs>
						key={inputName}
						register={register}
						name={inputName}
						validation={authInputValidations[inputName]}
						errors={errors}
						type={inputName}
					/>
				))}

				<FormButton label='Access' disabled={!isValid} id='auth' />
			</FormStack>
		</form>
	)
})

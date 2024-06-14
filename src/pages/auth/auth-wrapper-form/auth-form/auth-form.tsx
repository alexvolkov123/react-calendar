import { memo, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormButton } from '../../../../components/form-button/form-button'
import { FormInput } from '../../../../components/form-input/form-input'
import { FormStack } from '../../../../components/form-stack/form-stack'
import { Title } from '../../../../components/title/title'
import { useAuth } from '../../../../hooks/useAuth'
import { ITask, IUser } from '../../../../types/types'
import { inputValidations } from '../../../../validation'
import './auth-form.css'
import { AuthFormProps } from './props'

export const AuthForm = memo(({ title, isSignUp }: AuthFormProps) => {
	const { signIn, signUp, getInputs } = useAuth()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<IUser & ITask>({
		mode: 'onTouched',
		shouldFocusError: false,
	})

	const onSubmit: SubmitHandler<IUser> = useCallback(
		(data: IUser): void => {
			isSignUp ? signUp(data) : signIn(data)
			reset()
		},
		[isSignUp, reset, signIn, signUp]
	)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='form'>
			<FormStack>
				<Title>{title}</Title>
				{getInputs(isSignUp).map(inputName => (
					<FormInput
						key={inputName}
						register={register}
						name={inputName}
						validation={inputValidations[inputName] || {}}
						errors={errors}
						type={inputName}
					/>
				))}

				<FormButton label='Access' disabled={!isValid} id='auth' />
			</FormStack>
		</form>
	)
})

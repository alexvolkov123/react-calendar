import { Stack } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '../../../../hooks/useAuth'
import { IUser } from '../../../../types/types'
import { inputValidations } from '../../../../validation'
import { AuthFormButton } from './auth-form-button/auth-form-button'
import { AuthFormInput } from './auth-form-input/auth-form-input'
import { AuthFormTitle } from './auth-form-title/auth-form-title'
import { AuthFormProps } from './props'

export const AuthForm = ({ title, isSignUp }: AuthFormProps) => {
	const { signIn, signUp, getInputs } = useAuth()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<IUser>({
		mode: 'onTouched',
		shouldFocusError: false,
	})

	const onSubmit: SubmitHandler<IUser> = (data: IUser) => {
		isSignUp ? signUp(data) : signIn(data)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='wrapper-form'>
			<Stack spacing={3} alignItems={'center'}>
				<AuthFormTitle title={title} />
				{getInputs(isSignUp).map(inputName => (
					<AuthFormInput
						key={inputName}
						register={register}
						name={inputName}
						validation={inputValidations[inputName]}
						errors={errors}
						type={inputName}
					/>
				))}

				<AuthFormButton isDisabled={!isValid} />
			</Stack>
		</form>
	)
}

import { TextField } from '@mui/material'

import { AuthFormInputProps } from './auth-form-input-props'

export const AuthFormInput = ({
	register,
	name,
	validation,
	errors,
	type,
}: AuthFormInputProps) => {
	const capitalizeFirstLetter = (word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1)
	}

	// const getIsError = () => {
	// 	return (
	// 		(!isValid && isTouched && isDirty) ||
	// 		(isTouched && isDirty && !!errors[name])
	// 	)
	// }

	return (
		<TextField
			{...register(name, validation)}
			label={capitalizeFirstLetter(name)}
			variant='outlined'
			error={!!errors[name]}
			helperText={errors[name]?.message}
			type={type}
		/>
	)
}

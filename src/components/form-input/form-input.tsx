import { TextField } from '@mui/material'

import { FormInputProps } from './form-input-props'

export const FormInput = ({
	register,
	name,
	validation,
	errors,
	type,
}: FormInputProps) => {
	const capitalizeFirstLetter = (inputName: string) => {
		if (inputName === 'date') return
		return inputName.charAt(0).toUpperCase() + inputName.slice(1)
	}

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

import { TextField } from '@mui/material'
import { useMemo } from 'react'

import { FieldValues, Path } from 'react-hook-form'
import { FormInputProps } from './form-input-props'

export function FormInput<T extends FieldValues, N extends Path<T>>({
	register,
	name,
	validation,
	errors,
	type,
}: FormInputProps<T, N>) {
	const nameWithCapitalizedFirstLetter = useMemo(
		() => (name === 'date' ? '' : name.charAt(0).toUpperCase() + name.slice(1)),
		[name]
	)

	const helperText = useMemo(
		() => (errors[name]?.message as string) || '',
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[errors[name]]
	)

	return (
		<TextField
			{...register(name, validation)}
			label={nameWithCapitalizedFirstLetter}
			variant='outlined'
			error={!!errors[name]}
			helperText={helperText}
			type={type}
		/>
	)
}

import { TextField } from '@mui/material'
import { ReactElement, useMemo } from 'react'

import { FieldValues, Path } from 'react-hook-form'
import { FormInputProps } from './form-input-props'

export function FormInput<T extends FieldValues, N extends Path<T>>({
	register,
	name,
	validation,
	errors,
	type,
}: FormInputProps<T, N>) {
	const nameWithCapitalizedFirstLetter = useMemo((): string => {
		if (name === 'date') return ''
		return name.charAt(0).toUpperCase() + name.slice(1)
	}, [name])

	const helperText = (): ReactElement => {
		return <>{errors[name] ? errors[name]?.message : ''}</>
	}

	return (
		<TextField
			{...register(name, validation)}
			label={nameWithCapitalizedFirstLetter}
			variant='outlined'
			error={!!errors[name]}
			helperText={helperText()}
			type={type}
		/>
	)
}

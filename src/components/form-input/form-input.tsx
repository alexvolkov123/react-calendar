import { TextField } from '@mui/material'
import { memo, useCallback } from 'react'

import { FormInputProps, inputTypes } from './form-input-props'

export const FormInput = memo(
	({ register, name, validation, errors, type }: FormInputProps) => {
		const capitalizeFirstLetter = useCallback(
			(inputName: inputTypes): string => {
				if (inputName === 'date') return ''
				return inputName.charAt(0).toUpperCase() + inputName.slice(1)
			},
			[]
		)

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
)

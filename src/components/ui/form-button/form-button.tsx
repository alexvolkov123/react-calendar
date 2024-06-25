import { Button } from '@mui/material'
import { memo } from 'react'

import { FormButtonProps } from './props'

export const FormButton = memo(({ id, label, disabled }: FormButtonProps) => {
	return (
		<Button disabled={disabled} id={id} variant='contained' type='submit'>
			{label}
		</Button>
	)
})

import { Button } from '@mui/material'

import { FormButtonProps } from './props'

export const FormButton = ({ id, label, disabled }: FormButtonProps) => {
	return (
		<Button disabled={disabled} id={id} variant='contained' type='submit'>
			{label}
		</Button>
	)
}

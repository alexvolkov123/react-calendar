import { Button } from '@mui/material'

export const AuthFormButton = ({ isDisabled }: { isDisabled: boolean }) => {
	return (
		<Button disabled={isDisabled} id='auth' variant='contained' type='submit'>
			Access
		</Button>
	)
}

import { Typography } from '@mui/material'

export const AuthFormTitle = (props: any) => {
	return (
		<Typography fontSize={20} color='primary'>
			{props.title}
		</Typography>
	)
}

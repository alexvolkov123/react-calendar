import { Typography } from '@mui/material'

export const Title = ({ text }: { text: string }) => {
	return (
		<Typography fontSize={20} color='primary'>
			{text}
		</Typography>
	)
}

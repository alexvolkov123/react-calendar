import { Typography } from '@mui/material'
import { PropsWithChildren, memo } from 'react'

export const Title = memo(({ children }: PropsWithChildren) => {
	return (
		<Typography fontSize={20} color='primary'>
			{children}
		</Typography>
	)
})

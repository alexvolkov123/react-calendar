import { PropsWithChildren } from 'react'

import { Stack } from '@mui/material'

export const FormStack = ({ children }: PropsWithChildren) => {
	return (
		<Stack spacing={3} alignItems={'center'}>
			{children}
		</Stack>
	)
}

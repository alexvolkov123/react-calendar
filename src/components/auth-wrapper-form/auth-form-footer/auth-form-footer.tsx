import { Link, Typography } from '@mui/material'
import { memo } from 'react'

import { AuthFormFooterProps } from './auth-form-footer-props'

export const AuthFormFooter = memo(
	({ text, path, label }: AuthFormFooterProps) => {
		return (
			<Typography display='flex' justifyContent='center'>
				<Typography marginRight={0.5}>{text}</Typography>
				<Link color='#701c1c' fontWeight={900} href={path}>
					{label}
				</Link>
			</Typography>
		)
	}
)

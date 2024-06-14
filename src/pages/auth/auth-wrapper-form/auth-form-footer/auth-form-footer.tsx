import { Link, Typography } from '@mui/material'
import { memo } from 'react'

import { AuthFormFooterProps } from './auth-form-footer-props'

export const AuthFormFooter = memo(
	({ text, linkValue, href }: AuthFormFooterProps) => {
		return (
			<Typography>
				{text + ' '}
				<Link color='#701c1c' fontWeight={900} href={href}>
					{linkValue}
				</Link>
			</Typography>
		)
	}
)

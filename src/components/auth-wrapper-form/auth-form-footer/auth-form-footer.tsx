import { Link, Typography } from '@mui/material'
import { memo, useMemo } from 'react'

import { AuthFormFooterProps } from './auth-form-footer-props'

export const AuthFormFooter = memo(
	({ text, title, href }: AuthFormFooterProps) => {
		const linkText = useMemo(
			() => (title === 'Sign In' ? 'Sign Up' : 'Sign In'),
			[title]
		)
		return (
			<Typography display='flex' justifyContent='center'>
				<Typography marginRight={0.5}>{text}</Typography>
				<Link color='#701c1c' fontWeight={900} href={href}>
					{linkText}
				</Link>
			</Typography>
		)
	}
)

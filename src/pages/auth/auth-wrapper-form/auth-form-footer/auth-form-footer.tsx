import { Link, Typography } from '@mui/material'
import { AuthFormFooterProps } from './auth-form-footer-props'

export const AuthFormFooter = ({
	text,
	linkValue,
	href,
}: AuthFormFooterProps) => {
	return (
		<Typography>
			{text + ' '}
			<Link color='#701c1c' fontWeight={900} href={href}>
				{linkValue}
			</Link>
		</Typography>
	)
}

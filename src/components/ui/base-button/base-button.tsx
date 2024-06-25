import { Button } from '@mui/material'

import { BaseButtonProps } from './base-button-props'

export const BaseButton = ({
	children,
	buttonText,
	disabled = false,
	type = 'button',
	variant = 'contained',
	id = '',
	onClick,
}: BaseButtonProps) => {
	return (
		<Button
			onClick={onClick}
			disabled={disabled}
			variant={variant}
			type={type}
			id={id}
		>
			{buttonText}
			{children}
		</Button>
	)
}

import { ReactElement } from 'react'

export type BaseButtonProps = {
	buttonText: string
	children?: ReactElement
	disabled?: boolean
	variant?: 'contained' | 'outlined'
	id?: string
	type?: 'button' | 'submit' | 'reset' | undefined
	onClick?: () => void
}

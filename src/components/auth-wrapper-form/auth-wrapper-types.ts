import { User } from '../../types/types'
import { AuthInputs } from '../ui/form-input/form-input-props'
import { AuthFormFooterProps } from './auth-form-footer/auth-form-footer-props'

export type AuthWrapperTypes = {
	title: string
	link: AuthFormFooterProps
	inputs: AuthInputs[]
	onSubmit: (data: User) => void
}

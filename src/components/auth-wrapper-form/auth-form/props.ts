import { User } from '../../../types/types'
import { AuthInputs } from '../../ui/form-input/form-input-props'

export type AuthFormProps = {
	title: string
	inputs: AuthInputs[]
	onSubmit: (data: User) => void
}

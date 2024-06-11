import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { ITask, IUser } from '../../types/types'

export type inputTypes =
	| 'email'
	| 'password'
	| 'username'
	| 'title'
	| 'description'
	| 'date'

// type authInputTypes = 'email' | 'password' | 'username'
// type dialogInputTypes = 'title' | 'description' | 'date'

export type FormInputProps = {
	register: UseFormRegister<IUser & ITask>
	name: inputTypes
	validation: RegisterOptions<IUser | ITask, inputTypes>
	errors: FieldErrors<IUser & ITask>
	type?: string
}

import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { IUser } from '../../../../../types/types'

export type inputTypes = 'email' | 'password' | 'username'

export type AuthFormInputProps = {
	register: UseFormRegister<IUser>
	name: inputTypes
	validation: RegisterOptions<IUser, inputTypes>
	errors: FieldErrors<IUser>
	type?: string
}

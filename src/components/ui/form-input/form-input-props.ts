import {
	FieldErrors,
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form'

export type AuthInputs = 'email' | 'password' | 'username'
export type CreateTaskInputs = 'title' | 'date' | 'description'

export type FormInputProps<T extends FieldValues, N extends Path<T>> = {
	register: UseFormRegister<T>
	name: N
	validation: RegisterOptions<T, N>
	errors: FieldErrors<T>
	type?: N
}

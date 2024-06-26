import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthInputs } from '../components/ui/form-input/form-input-props'
import { UserContext } from '../contexts/user/user.context'
import { RoutePathsEnum } from '../routes/types'
import { User } from '../types/types'
import { notify } from '../utils/notify/notify'

export const useAuth = () => {
	const navigate = useNavigate()
	const { addUser, registerUser, isUserExist, isPasswordMatch } =
		useContext(UserContext)

	const signIn = useCallback(
		(user: User) => {
			if (!isUserExist(user.email)) {
				notify('User is not found', 'error')
			} else if (!isPasswordMatch(user)) {
				notify('The password is incorrect', 'error')
			} else {
				addUser(user.email)
				navigate(RoutePathsEnum.calendar)
				notify('You are logged in')
			}
		},
		[addUser, isPasswordMatch, isUserExist, navigate]
	)

	const signUp = useCallback(
		(user: User) => {
			if (isUserExist(user.email)) {
				notify('An account with the same email address already exists', 'error')
			} else {
				registerUser({ ...user, tasks: [] })
				notify('You are registered')
				navigate(RoutePathsEnum.calendar)
			}
		},
		[isUserExist, navigate, registerUser]
	)
	const signInInputs: AuthInputs[] = ['email', 'password']
	const signUpInputs: AuthInputs[] = ['username', ...signInInputs]

	return {
		signIn,
		signUp,
		signInInputs,
		signUpInputs,
	}
}

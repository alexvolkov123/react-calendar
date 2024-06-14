import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { inputTypes } from '../components/form-input/form-input-props'
import { UserContext } from '../contexts/user/user.context'
import { Routes } from '../routes/routes'
import { IUser } from '../types/types'
import { notify } from '../utils/notify/notify'
import { notifyMessages } from '../utils/notify/notify-messages'

export const useAuth = () => {
	const navigate = useNavigate()
	const { addUser, registerUser, isUserExist, isPasswordMatch } =
		useContext(UserContext)

	const signIn = useCallback(
		(user: IUser) => {
			if (!isUserExist(user.email)) {
				notify(notifyMessages.userNotFound, 'error')
			} else if (!isPasswordMatch(user)) {
				notify(notifyMessages.passwordIsIncorrect, 'error')
			} else {
				addUser(user.email)
				navigate(Routes.calendar)
				notify(notifyMessages.loggedIn)
			}
		},
		[addUser, isPasswordMatch, isUserExist, navigate]
	)

	const signUp = useCallback(
		(user: IUser) => {
			if (isUserExist(user.email)) {
				notify(notifyMessages.userAlreadyExists, 'error')
			} else {
				registerUser({ ...user, tasks: [] })
				notify(notifyMessages.youAreRegistered)
				navigate(Routes.calendar)
			}
		},
		[isUserExist, navigate, registerUser]
	)

	const getInputs = useCallback((isSignUp: boolean): inputTypes[] => {
		const signInInputs: inputTypes[] = ['email', 'password']
		const signUpInputs: inputTypes[] = ['username', ...signInInputs]

		return isSignUp ? signUpInputs : signInInputs
	}, [])

	return {
		signIn,
		signUp,
		getInputs,
	}
}

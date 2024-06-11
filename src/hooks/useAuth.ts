import { useContext } from 'react'
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

	const signIn = (user: IUser) => {
		if (!isUserExist(user.email)) {
			notify(notifyMessages.userNotFound, 'error')
		} else if (!isPasswordMatch(user)) {
			notify(notifyMessages.passwordIsIncorrect, 'error')
		} else {
			addUser(user.email)
			navigate(Routes.calendar)
			notify(notifyMessages.loggedIn)
		}
	}

	const signUp = (user: IUser) => {
		if (isUserExist(user.email)) {
			notify(notifyMessages.userAlreadyExists, 'error')
		} else {
			registerUser({ ...user, tasks: [] })
			notify(notifyMessages.youAreRegistered)
			navigate(Routes.calendar)
		}
	}

	const getInputs = (isSignUp: boolean) => {
		const signInInputs: inputTypes[] = ['email', 'password']
		const signUpInputs: inputTypes[] = ['username', ...signInInputs]

		return isSignUp ? signUpInputs : signInInputs
	}

	return {
		signIn,
		signUp,
		getInputs,
	}
}

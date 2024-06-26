import { ReactElement, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { UserContext } from '../contexts/user/user.context'
import { AuthGuardProps } from './props'

export const AuthGuard = ({
	children,
	redirect,
	isInverse = false,
}: AuthGuardProps) => {
	const { getUserFromStorage } = useContext(UserContext)

	const routesCondition = (): ReactElement => {
		if (isInverse)
			return !getUserFromStorage() ? children : <Navigate to={redirect} />
		return getUserFromStorage() ? children : <Navigate to={redirect} />
	}

	return routesCondition()
}

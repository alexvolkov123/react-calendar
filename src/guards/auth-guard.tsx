import { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useLocalStorage } from '../hooks/local-storage/useLocalStorage'
import { AuthGuardProps } from './props'

export const AuthGuard = ({
	children = <></>,
	redirect,
	isInverse = false,
}: AuthGuardProps) => {
	const { getUserFromStorage } = useLocalStorage()

	const routesCondition = (): ReactElement => {
		if (isInverse)
			return !getUserFromStorage() ? children : <Navigate to={redirect} />
		return getUserFromStorage() ? children : <Navigate to={redirect} />
	}

	return routesCondition()
}

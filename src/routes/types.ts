import { ReactElement } from 'react'

export type isAuthType = {
	redirect: RoutePaths
	isInverse?: boolean
}

export type routeType = {
	path: RoutePaths
	element: ReactElement
	isAuth?: isAuthType
}

export enum RoutePaths {
	root = '/',
	signIn = '/sign-in',
	signUp = '/sign-up',
	calendar = '/calendar',
}

import { RouteObject } from 'react-router-dom'
import { AuthGuard } from '../guards/auth-guard'
import { SignInPage } from '../pages/auth/sign-in-page'
import { SignUpPage } from '../pages/auth/sign-up-page'
import { CalendarPage } from '../pages/calendar/calendar-page'
import { NotFoundPage } from '../pages/not-found/not-found-page'
import { RoutePathsEnum } from './types'

export const routes: RouteObject[] = [
	{
		path: RoutePathsEnum.root,
		element: (
			<AuthGuard redirect={RoutePathsEnum.signIn}>
				<CalendarPage />
			</AuthGuard>
		),
	},
	{
		path: RoutePathsEnum.calendar,
		element: (
			<AuthGuard redirect={RoutePathsEnum.signIn}>
				<CalendarPage />
			</AuthGuard>
		),
	},
	{
		path: RoutePathsEnum.signIn,
		element: (
			<AuthGuard redirect={RoutePathsEnum.calendar} isInverse={true}>
				<SignInPage />
			</AuthGuard>
		),
	},
	{
		path: RoutePathsEnum.signUp,
		element: (
			<AuthGuard redirect={RoutePathsEnum.calendar} isInverse={true}>
				<SignUpPage />
			</AuthGuard>
		),
	},
	{
		path: RoutePathsEnum.notFound,
		element: <NotFoundPage />,
	},
]

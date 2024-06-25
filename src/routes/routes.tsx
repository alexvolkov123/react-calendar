import { RouteObject } from 'react-router-dom'
import { AuthGuard } from '../guards/auth-guard'
import { AuthPage } from '../pages/auth/auth-page'
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
				<AuthPage isSignIn={true} />
			</AuthGuard>
		),
	},
	{
		path: RoutePathsEnum.signUp,
		element: (
			<AuthGuard redirect={RoutePathsEnum.calendar} isInverse={true}>
				<AuthPage isSignIn={false} />
			</AuthGuard>
		),
	},
	{
		path: RoutePathsEnum.notFound,
		element: <NotFoundPage />,
	},
]

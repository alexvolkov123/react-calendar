import { AuthWrapperForm } from '../pages/auth/auth-wrapper-form/auth-wrapper-form'
import { Calendar } from '../pages/calendar/calendar'
import { RoutePaths, routeType } from './types'

export const routes: routeType[] = [
	{
		path: RoutePaths.root,
		element: <Calendar />,
		isAuth: { redirect: RoutePaths.signIn },
	},
	{
		path: RoutePaths.calendar,
		element: <Calendar />,
		isAuth: { redirect: RoutePaths.signIn },
	},
	{
		path: RoutePaths.signIn,
		element: (
			<AuthWrapperForm
				linkText='Don`t have an account? Try to'
				isSignUp={false}
				title='Sign In'
			/>
		),
		isAuth: { redirect: RoutePaths.calendar, isInverse: true },
	},
	{
		path: RoutePaths.signUp,
		element: (
			<AuthWrapperForm
				linkText='Have you an account?'
				isSignUp={true}
				title='Sign up'
			/>
		),
		isAuth: { redirect: RoutePaths.calendar, isInverse: true },
	},
]

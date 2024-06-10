import { createBrowserRouter } from 'react-router-dom'
import { AuthGuard } from './guards/auth-guard'
import { AuthWrapperForm } from './pages/auth/auth-wrapper-form/auth-wrapper-form'
import { Calendar } from './pages/calendar/calendar'
import { Routes } from './routes/routes'

export const router = createBrowserRouter([
	{
		path: Routes.root,
		element: (
			<AuthGuard redirect={Routes.signIn}>
				<Calendar />
			</AuthGuard>
		),
	},
	{
		path: Routes.signIn,
		element: (
			<AuthGuard redirect={Routes.calendar} isInverse={true}>
				<AuthWrapperForm
					linkText='Don`t have an account? Try to'
					isSignUp={false}
					title='Sign In'
				/>
			</AuthGuard>
		),
	},
	{
		path: Routes.signUp,
		element: (
			<AuthGuard redirect={Routes.calendar} isInverse={true}>
				<AuthWrapperForm
					linkText='Have you an account?'
					isSignUp={true}
					title='Sign up'
				/>
			</AuthGuard>
		),
	},
	{
		path: Routes.calendar,
		element: (
			<AuthGuard redirect={Routes.signIn}>
				<Calendar />
			</AuthGuard>
		),
	},
])

import { createBrowserRouter, redirect } from 'react-router-dom'

import CalendarGuard from './guards/calendar.guard'
import AuthForm from './pages/auth/auth-form'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <></>,
		loader: () => redirect('/login'),
	},
	{
		path: '/login',
		element: <AuthForm formType={'login'} />,
	},
	{
		path: '/register',
		element: <AuthForm formType={'register'} />,
	},
	{
		path: '/calendar',
		element: <CalendarGuard />,
	},
])

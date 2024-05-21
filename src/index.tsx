import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import './index.css'
import AuthForm from './pages/auth/auth-form'
import Calendar from './pages/calendar/calendar'
import { theme } from './theme'

const router = createBrowserRouter([
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
		element: <Calendar />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)

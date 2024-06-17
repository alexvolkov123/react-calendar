import { createBrowserRouter } from 'react-router-dom'
import { AuthGuard } from './guards/auth-guard'
import { routes } from './routes/routes'

export const router = createBrowserRouter([
	...routes.map(route => {
		return {
			path: route.path,
			element: route.isAuth ? (
				<AuthGuard
					redirect={route.isAuth!.redirect}
					isInverse={route.isAuth!.isInverse && true}
				>
					{route.element}
				</AuthGuard>
			) : (
				route.element
			),
		}
	}),
])

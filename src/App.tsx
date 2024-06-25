import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeContext } from './contexts/theme/theme.context'
import { UserContext } from './contexts/user/user.context'
import { useMode } from './hooks/useMode'
import { useUser } from './hooks/useUser'
import { router } from './router'

export const App = () => {
	const { theme, setColorMode, mode } = useMode()
	const userContext = useUser()

	return (
		<ThemeContext.Provider value={{ setColorMode, mode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<UserContext.Provider value={{ ...userContext }}>
					<RouterProvider router={router} />

					<ToastContainer
						position={'bottom-right'}
						autoClose={2}
						hideProgressBar={false}
						closeOnClick={true}
						pauseOnHover={true}
						draggable={true}
						theme={'light'}
						transition={Zoom}
					/>
				</UserContext.Provider>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

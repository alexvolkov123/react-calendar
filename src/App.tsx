import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeContext, useMode } from './contexts/theme/theme.context'
import { UserContext, useUser } from './contexts/user/user.context'
import { router } from './router'

export default function App() {
	const { theme, setColorMode, getColorMode } = useMode()
	const {
		removeUser,
		addUser,
		getUserTasks,
		setUserTasks,
		registerUser,
		isUserExist,
		isPasswordMatch,
	} = useUser()

	return (
		<ThemeContext.Provider value={{ setColorMode, getColorMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<UserContext.Provider
					value={{
						removeUser,
						addUser,
						getUserTasks,
						setUserTasks,
						registerUser,
						isUserExist,
						isPasswordMatch,
					}}
				>
					<RouterProvider router={router} />
					<ToastContainer
						position={'bottom-right'}
						autoClose={3}
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

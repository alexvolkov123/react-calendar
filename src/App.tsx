import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeContext, ThemeProvider } from '@emotion/react'
import { ToastContainer, Zoom } from 'react-toastify'
import { router } from './router'
import { useMode } from './theme.context'
import { UserContext, useUser } from './user.context'

export default function App() {
	const { theme, colorMode } = useMode()
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
		<ThemeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
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

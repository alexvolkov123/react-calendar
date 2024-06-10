import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CalendarContext } from './contexts/calendar/calendar-context'
import { ThemeContext } from './contexts/theme/theme.context'
import { UserContext } from './contexts/user/user.context'
import { useCalendar } from './hooks/useCalendar'
import { useMode } from './hooks/useMode'
import { useUser } from './hooks/useUser'
import { router } from './router'

export const App = () => {
	const { theme, setColorMode, getColorMode } = useMode()

	return (
		<ThemeContext.Provider value={{ setColorMode, getColorMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<UserContext.Provider value={{ ...useUser() }}>
					<CalendarContext.Provider value={{ ...useCalendar() }}>
						<RouterProvider router={router} />
					</CalendarContext.Provider>

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

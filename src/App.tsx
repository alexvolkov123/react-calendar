import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Provider } from 'react-redux'
import { ThemeContext, useMode } from './contexts/theme/theme.context'
import { router } from './router'
import { store } from './store/store'

export default function App() {
	const { theme, setColorMode, getColorMode } = useMode()

	return (
		<ThemeContext.Provider value={{ setColorMode, getColorMode }}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
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
				</ThemeProvider>
			</Provider>
		</ThemeContext.Provider>
	)
}

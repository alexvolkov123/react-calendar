import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useMode } from './hooks/useMode'
import { router } from './router'

export default function App() {
	const { theme } = useMode()

	return (
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
	)
}

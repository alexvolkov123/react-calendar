import { Zoom, toast } from 'react-toastify'

const notifyConfig = {
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
	transition: Zoom,
}

export const notify = (text: string, type: 'success' | 'error' = 'success') => {
	toast[type](text, notifyConfig)
}

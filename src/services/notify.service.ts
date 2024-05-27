import { Zoom, toast } from 'react-toastify'
import { notifyTypes } from '../types/types'

export function notify(text: string, type: string) {
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
	switch (type) {
		case notifyTypes.success: {
			toast.success(text, notifyConfig)
			break
		}
		case notifyTypes.error: {
			toast.error(text, notifyConfig)
			break
		}
		default:
			break
	}
}

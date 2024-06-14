import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	setDefaultOptions,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from 'date-fns'
import { useCallback, useState } from 'react'

setDefaultOptions({ weekStartsOn: 1 })

export const useCalendar = () => {
	const [today, setToday] = useState(startOfToday())

	const [isCreateDialog, setIsCreateDialog] = useState(false)
	const [isEditDialog, setIsEditDialog] = useState(false)

	const getDays = useCallback((): Date[] => {
		return eachDayOfInterval({
			start: startOfWeek(startOfMonth(today)),
			end: endOfWeek(endOfMonth(today)),
		})
	}, [today])

	return {
		today,
		isCreateDialog,
		isEditDialog,

		getDays,
		setToday,
		setIsCreateDialog,
		setIsEditDialog,
	}
}

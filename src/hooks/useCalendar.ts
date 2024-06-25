import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	setDefaultOptions,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from 'date-fns'
import { useEffect, useMemo, useState } from 'react'

setDefaultOptions({ weekStartsOn: 1 })

export const useCalendar = () => {
	const [today, setToday] = useState<Date>(new Date())
	useEffect(() => setToday(startOfToday()), [])

	const [isCreateDialog, setIsCreateDialog] = useState<boolean>(false)
	const [isEditDialog, setIsEditDialog] = useState<boolean>(false)

	const [editedDay, setEditedDay] = useState(new Date())

	const days = useMemo((): Date[] => {
		return eachDayOfInterval({
			start: startOfWeek(startOfMonth(today)),
			end: endOfWeek(endOfMonth(today)),
		})
	}, [today])

	return {
		isCreateDialog,
		isEditDialog,
		today,
		editedDay,

		days,

		setToday,
		setEditedDay,
		setIsEditDialog,
		setIsCreateDialog,
	}
}

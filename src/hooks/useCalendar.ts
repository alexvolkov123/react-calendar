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

	const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false)
	const [openEditDialog, setOpenEditDialog] = useState<boolean>(false)

	const [editedDay, setEditedDay] = useState(new Date())

	const days = useMemo(
		(): Date[] =>
			eachDayOfInterval({
				start: startOfWeek(startOfMonth(today)),
				end: endOfWeek(endOfMonth(today)),
			}),
		[today]
	)

	return {
		openCreateDialog,
		openEditDialog,
		today,
		editedDay,

		days,

		setToday,
		setEditedDay,
		setOpenEditDialog,
		setOpenCreateDialog,
	}
}

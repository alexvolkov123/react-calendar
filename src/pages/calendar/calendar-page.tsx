import { memo } from 'react'

import { CalendarComponent } from '../../components/calendar/calendar-component'
import { CreateDialog } from '../../components/popups/create/create.dialog'
import { EditDialog } from '../../components/popups/edit/edit-dialog'
import { CalendarContext } from '../../contexts/calendar/calendar-context'
import { useCalendar } from '../../hooks/useCalendar'

export const CalendarPage = memo(() => {
	const calendar = useCalendar()

	return (
		<CalendarContext.Provider value={{ ...calendar }}>
			<CalendarComponent />
			<CreateDialog />
			<EditDialog />
		</CalendarContext.Provider>
	)
})

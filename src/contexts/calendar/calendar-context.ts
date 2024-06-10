import { createContext } from 'react'

import { useCalendar } from '../../hooks/useCalendar'

export const CalendarContext = createContext<ReturnType<typeof useCalendar>>(
	{} as ReturnType<typeof useCalendar>
)

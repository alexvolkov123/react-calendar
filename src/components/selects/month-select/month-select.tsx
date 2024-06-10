import { MenuItem, Select } from '@mui/material'
import { eachMonthOfInterval, endOfYear, format, startOfYear } from 'date-fns'
import { useContext } from 'react'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'

export const MonthSelect = () => {
	const { today, setToday } = useContext(CalendarContext)

	const getMonths = () => {
		return eachMonthOfInterval({
			start: startOfYear(today),
			end: endOfYear(today),
		})
	}

	const handleChangeMonth = (startOfMonth: Date) => {
		setToday(startOfMonth)
	}

	return (
		<Select
			value={getMonths()[today.getMonth()].toISOString()}
			onChange={e => handleChangeMonth(new Date(e.target.value))}
		>
			{getMonths().map((month, index) => (
				<MenuItem value={month.toISOString()} key={index}>
					{format(month, 'MMMM')}
				</MenuItem>
			))}
		</Select>
	)
}

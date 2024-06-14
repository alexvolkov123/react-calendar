import { MenuItem, Select } from '@mui/material'
import { eachMonthOfInterval, endOfYear, format, startOfYear } from 'date-fns'
import { memo, useCallback, useContext } from 'react'

import { CalendarContext } from '../../../contexts/calendar/calendar-context'

export const MonthSelect = memo(() => {
	const { today, setToday } = useContext(CalendarContext)

	const getMonths = useCallback(() => {
		return eachMonthOfInterval({
			start: startOfYear(today),
			end: endOfYear(today),
		})
	}, [today])

	const handleChangeMonth = useCallback(
		(startOfMonth: Date): void => {
			setToday(startOfMonth)
		},
		[setToday]
	)

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
})

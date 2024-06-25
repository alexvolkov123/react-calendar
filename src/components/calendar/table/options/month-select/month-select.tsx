import { SelectChangeEvent } from '@mui/material'
import { eachMonthOfInterval, endOfYear, format, startOfYear } from 'date-fns'
import { memo, useCallback, useContext, useMemo } from 'react'

import { CalendarContext } from '../../../../../contexts/calendar/calendar-context'
import { BaseSelect } from '../../../../ui/base-select/base-select'

export const MonthSelect = memo(() => {
	const { today, setToday } = useContext(CalendarContext)

	const months = useMemo(() => {
		return eachMonthOfInterval({
			start: startOfYear(today),
			end: endOfYear(today),
		})
	}, [today])

	const handleChangeMonth = useCallback(
		(e: SelectChangeEvent) => {
			setToday(new Date(e.target.value))
		},
		[setToday]
	)

	const convertedMonths = useMemo(() => {
		return months.map(month => {
			return { value: month.toISOString(), label: format(month, 'MMMM') }
		})
	}, [months])

	return (
		<BaseSelect
			items={convertedMonths}
			selectedItem={months[today.getMonth()].toISOString()}
			onChange={handleChangeMonth}
		/>
	)
})

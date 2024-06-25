import { SelectChangeEvent } from '@mui/material'
import { eachMonthOfInterval, endOfYear, format, startOfYear } from 'date-fns'
import { memo, useCallback, useContext, useMemo } from 'react'

import { CalendarContext } from '../../../../contexts/calendar/calendar-context'
import { BaseSelect } from '../base-select/base-select'

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
	const onConvert = (date: string) => {
		return format(date, 'MMMM')
	}

	return (
		<BaseSelect
			items={months.map(month => month.toISOString())}
			selectedItem={months[today.getMonth()].toISOString()}
			onConvert={onConvert}
			onChange={handleChangeMonth}
		/>
	)
})

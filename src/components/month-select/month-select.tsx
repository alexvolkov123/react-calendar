import { MenuItem, Select } from '@mui/material'
import { eachMonthOfInterval, endOfYear, format, startOfYear } from 'date-fns'

import { ISelect } from '../../types/types'

export default function MonthSelect({ today, setToday }: ISelect) {
	function getMonths() {
		return eachMonthOfInterval({
			start: startOfYear(today),
			end: endOfYear(today),
		})
	}

	function handleChangeMonth(startOfMonth: Date) {
		setToday(startOfMonth)
	}

	return (
		<Select
			value={getMonths()[today.getMonth()].toISOString()}
			placeholder={format(today, 'MMMM')}
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

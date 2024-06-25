import { memo } from 'react'

import { MonthSelect } from '../../../ui/selects/month-select/month-select'
import { YearSelect } from '../../../ui/selects/year-select/year-select'
import './options.css'

export const CalendarOptions = memo(() => {
	return (
		<div className='options'>
			<YearSelect />
			<MonthSelect />
		</div>
	)
})

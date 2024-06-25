import { memo } from 'react'

import { MonthSelect } from './month-select/month-select'
import './options.css'
import { YearSelect } from './year-select/year-select'

export const CalendarOptions = memo(() => {
	return (
		<div className='options'>
			<YearSelect />
			<MonthSelect />
		</div>
	)
})

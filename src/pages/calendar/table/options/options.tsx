import { memo } from 'react'

import { MonthSelect } from '../../../../components/selects/month-select/month-select'
import { YearSelect } from '../../../../components/selects/year-select/year-select'
import './options.css'

export const CalendarOptions = memo(() => {
	return (
		<div className='options'>
			<YearSelect />
			<MonthSelect />
		</div>
	)
})

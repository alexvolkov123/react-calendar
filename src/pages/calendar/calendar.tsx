import { memo } from 'react'

import { ThemeSelect } from '../../components/selects/theme-select/theme-select'
import './calendar.css'
import { CalendarHeader } from './header/header'
import { CalendarTable } from './table/table'

export const Calendar = memo(() => {
	return (
		<>
			<CalendarHeader />
			<div className='calendar-body'>
				<CalendarTable />
				<div className='calendar-body__theme'>
					<ThemeSelect />
				</div>
			</div>
		</>
	)
})

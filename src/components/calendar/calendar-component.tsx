import './calendar-component.css'
import { CalendarHeader } from './header/header'
import { CalendarTable } from './table/table'
import { ThemeSelect } from './theme-select/theme-select'

export const CalendarComponent = () => {
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
}

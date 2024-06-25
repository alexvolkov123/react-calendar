import { ThemeSelect } from '../ui/selects/theme-select/theme-select'
import { CalendarButtonCreateTask } from './button/button-create-task'
import './calendar-component.css'
import { CalendarHeader } from './header/header'
import { CalendarTable } from './table/table'

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
			<CalendarButtonCreateTask />
		</>
	)
}

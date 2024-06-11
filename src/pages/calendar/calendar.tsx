import { ThemeSelect } from '../../components/selects/theme-select/theme-select'
import { CalendarButtonCreateTask } from './button/button-create-task'
import './calendar.css'
import { CalendarHeader } from './header/header'
import { CalendarTable } from './table/table'

export const Calendar = () => {
	return (
		<>
			<CalendarHeader />
			<div className='calendar-body'>
				<CalendarTable />
				<div className='calendar-body__theme'>
					<ThemeSelect />
					<CalendarButtonCreateTask />
				</div>
			</div>
		</>
	)
}

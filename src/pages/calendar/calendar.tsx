import { Button } from '@mui/material'
import { setDefaultOptions } from 'date-fns'
import { useContext } from 'react'

import { CreateDialog } from '../../components/popups/create/create.dialog'
import { EditDialog } from '../../components/popups/edit/edit.dialog'
import { ThemeSelect } from '../../components/selects/theme-select/theme-select'
import { CalendarContext } from '../../contexts/calendar/calendar-context'
import { useTasks } from '../../hooks/useTasks'
import { ITask } from '../../types/types'
import './calendar.css'
import { CalendarGrid } from './grid/grid'
import { CalendarHeader } from './header/header'
import { CalendarOptions } from './options/options'

setDefaultOptions({ weekStartsOn: 1 })

export const Calendar = () => {
	const { isCreateDialog, isEditDialog, setIsCreateDialog, setIsEditDialog } =
		useContext(CalendarContext)

	const { getUserTasks, setUserTasks, getFilteredUserTasks } = useTasks()

	const closeCreateDialog = (task?: ITask) => {
		setIsCreateDialog(false)
		task && setUserTasks([...getUserTasks(), task])
	}

	return (
		<div className='calendar'>
			<CalendarHeader />
			<div className='calendar-body'>
				<div className='calendar-body__wrapper'>
					<div className='calendar-body__table'>
						<CalendarOptions />
						<CalendarGrid />
						<CreateDialog open={isCreateDialog} onClose={closeCreateDialog} />
						<EditDialog
							tasks={getFilteredUserTasks()}
							open={isEditDialog}
							onClose={() => setIsEditDialog(false)}
						/>
					</div>
					<div className='calendar-body__theme'>
						<ThemeSelect></ThemeSelect>
						<Button
							id='createTask'
							className='calendar-body__create-task'
							onClick={() => setIsCreateDialog(true)}
						>
							+
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

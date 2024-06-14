import { Grid } from '@mui/material'
import { memo } from 'react'

import { CreateDialog } from '../../../components/popups/create/create.dialog'
import { CalendarContext } from '../../../contexts/calendar/calendar-context'
import { useCalendar } from '../../../hooks/useCalendar'
import { CalendarButtonCreateTask } from '../button/button-create-task'
import { CalendarGrid } from './grid/grid'
import { CalendarOptions } from './options/options'

export const CalendarTable = memo(() => {
	return (
		<>
			<CalendarContext.Provider value={{ ...useCalendar() }}>
				<Grid minWidth={615} width={615}>
					<Grid item xs={12}>
						<CalendarOptions />
					</Grid>
					<Grid item xs={12}>
						<CalendarGrid />
					</Grid>

					<CreateDialog />
				</Grid>
				<CalendarButtonCreateTask />
			</CalendarContext.Provider>
		</>
	)
})

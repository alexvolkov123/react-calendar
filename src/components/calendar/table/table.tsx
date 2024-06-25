import { Grid } from '@mui/material'
import { memo } from 'react'

import { CalendarGrid } from './grid/grid'
import { CalendarOptions } from './options/options'

export const CalendarTable = memo(() => {
	return (
		<>
			<Grid minWidth={615} width={615}>
				<Grid item xs={12}>
					<CalendarOptions />
				</Grid>
				<Grid item xs={12}>
					<CalendarGrid />
				</Grid>
			</Grid>
		</>
	)
})

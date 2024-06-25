import { Grid } from '@mui/material'
import { memo, useContext } from 'react'

import { CalendarContext } from '../../../../contexts/calendar/calendar-context'
import { CalendarGridItem } from './item/item'

export const CalendarGrid = memo(() => {
	const { days } = useContext(CalendarContext)

	return (
		<Grid
			className='grid'
			container
			direction={'row'}
			spacing={2}
			columns={7}
			gridTemplateRows={6}
		>
			{days.map(day => (
				<CalendarGridItem key={day.toISOString()} day={day} />
			))}
		</Grid>
	)
})

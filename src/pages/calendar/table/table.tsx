import { Grid } from '@mui/material'

import { CreateDialog } from '../../../components/popups/create/create.dialog'
import { EditDialog } from '../../../components/popups/edit/edit-dialog'
import { CalendarGrid } from './grid/grid'
import { CalendarOptions } from './options/options'

export const CalendarTable = () => {
	return (
		<Grid minWidth={615} width={615}>
			<Grid item xs={12}>
				<CalendarOptions />
			</Grid>
			<Grid item xs={12}>
				<CalendarGrid />
			</Grid>

			<CreateDialog />
			<EditDialog />
		</Grid>
	)
}

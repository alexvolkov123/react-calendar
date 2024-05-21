import { Button, Grid, Link } from '@mui/material'
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from 'date-fns'

import './calendar.css'

export default function Calendar() {
	let today = startOfToday()

	let newDays = eachDayOfInterval({
		start: startOfWeek(startOfMonth(today)),
		end: endOfWeek(endOfMonth(today)),
	})

	return (
		<div className='calendar'>
			<div className='calendar-header'>
				<div className='calendar-header__title'>Calendar Application</div>
				<div className='calendar-header__button'>
					<Link href='/login'>
						<Button variant='outlined'>Logout</Button>
					</Link>
				</div>
			</div>
			<div className='calendar-body'>
				<div className='calendar-body__grid'>
					<Grid
						container
						direction={'row'}
						spacing={1}
						columns={7}
						gridTemplateRows={6}
					>
						{newDays.map((day, index) => (
							<Grid item key={index}>
								{day.getMonth() !== today.getMonth() ? (
									<Button
										variant='contained'
										className='notPresentMonth'
										type='button'
									>
										{format(day, 'd')}
									</Button>
								) : (
									<Button variant='contained' type='button'>
										{format(day, 'd')}
									</Button>
								)}
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</div>
	)
}

import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { add, sub } from 'date-fns'

import { ISelect } from '../../types/types'
import './year-select.css'

export default function YearSelect({ today, setToday }: ISelect) {
	function handleChangeYear(addYear: boolean) {
		addYear
			? setToday(add(today, { years: 1 }))
			: setToday(sub(today, { years: 1 }))
	}
	return (
		<div className='year-select'>
			<IconButton onClick={() => handleChangeYear(false)}>
				<ArrowLeft className='year-select__item' />
			</IconButton>
			<Typography className='year-select__item'>
				{today.getFullYear()}
			</Typography>
			<IconButton onClick={() => handleChangeYear(true)}>
				<ArrowRight className='year-select__item' />
			</IconButton>
		</div>
	)
}

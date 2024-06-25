import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { RoutePathsEnum } from '../../routes/types'
import { Title } from '../ui/title/title'
import './not-found.css'

export const NotFoundComponent = () => {
	const navigate = useNavigate()

	const navigateToBack = () => {
		navigate(RoutePathsEnum.calendar)
	}

	return (
		<div className='notFound'>
			<Title>This page was not found</Title>
			<div className='notFound__button'>
				<Button onClick={() => navigateToBack()} variant='contained'>
					Go back
				</Button>
			</div>
		</div>
	)
}

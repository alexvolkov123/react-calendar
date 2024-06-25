import { useNavigate } from 'react-router-dom'
import { RoutePathsEnum } from '../../routes/types'
import { BaseButton } from '../ui/base-button/base-button'
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
				<BaseButton buttonText='Go back' onClick={() => navigateToBack()} />
			</div>
		</div>
	)
}

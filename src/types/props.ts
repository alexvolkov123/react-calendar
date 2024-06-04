import { ITask } from './types'

export interface ICreateDialogProps {
	open: boolean
	onClose: (value?: ITask) => void
}

export interface IEditDialogProps {
	tasks: ITask[]
	open: boolean
	onClose: () => void
}

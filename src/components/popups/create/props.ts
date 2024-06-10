import { ITask } from '../../../types/types'

export type ICreateDialogProps = {
	open: boolean
	onClose: (value?: ITask) => void
}

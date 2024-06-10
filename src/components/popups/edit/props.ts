import { ITask } from '../../../types/types'

export type IEditDialogProps = {
	tasks: ITask[]
	open: boolean
	onClose: () => void
}

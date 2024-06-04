import { ITask, IUser } from '../../types/types'
import { UserActionTypes } from '../../types/user'

export function createActionAddUser(user: IUser) {
	return { type: UserActionTypes.ADD_USER, payload: user }
}
export function createActionSetUserTasks(tasks: ITask[]) {
	return { type: UserActionTypes.SET_USER_TASKS, payload: tasks }
}

import { ITask, IUser } from './types'

export interface UserState {
	user: IUser
	tasks: ITask[]
}

export interface AddUserAction {
	type: UserActionTypes.ADD_USER
	payload: IUser
}
export interface SetUserTasksAction {
	type: UserActionTypes.SET_USER_TASKS
	payload: ITask[]
}

export enum UserActionTypes {
	ADD_USER = 'ADD_USER',
	SET_USER_TASKS = 'SET_USER_TASKS',
}

export type UserActions = AddUserAction | SetUserTasksAction

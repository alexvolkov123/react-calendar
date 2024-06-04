import { UserActionTypes, UserActions, UserState } from '../../types/user'

const initialState: UserState = {
	user: JSON.parse(localStorage.getItem('currentUser')!) || {},
	tasks: JSON.parse(localStorage.getItem('currentUser')!).tasks || [],
}

export const userReducer = (
	state: UserState = initialState,
	action: UserActions
) => {
	switch (action.type) {
		case UserActionTypes.ADD_USER: {
			return { ...state, user: action.payload }
		}
		case UserActionTypes.SET_USER_TASKS: {
			return { ...state, tasks: [...action.payload] }
		}
	}
	return state
}

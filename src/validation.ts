// eslint-disable-next-line no-useless-escape
const REG_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const REG_LATIN = /[а-яА-Я]/

export const emailValidation = {
	required: 'Email is required',
	validate: (value: string) => {
		if (value.match(REG_LATIN)) {
			return 'Email must contain only latin letters'
		}
		if (!value.match(REG_EMAIL)) {
			return 'Invalid Email'
		}
	},
}

export const passwordValidation = {
	required: 'Password is required',
	validate: (value: string) => {
		if (value.length < 8) {
			return 'Password must be contain at least 7 letters'
		}
	},
}

export const userNameValidation = {
	required: 'Username is required',
	validate: (value: string) => {
		if (value.length < 5) {
			return 'Username must be contain at least 4 letters'
		}
	},
}

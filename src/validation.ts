// eslint-disable-next-line no-useless-escape
const REG_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const REG_LATIN = /[а-яА-Я]/

const emailValidation = {
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

const passwordValidation = {
	required: 'Password is required',
	validate: (value: string) => {
		if (value.length < 8) {
			return 'Password must be contain at least 7 letters'
		}
	},
}

const usernameValidation = {
	required: 'Username is required',
	validate: (value: string) => {
		if (value.length < 5) {
			return 'Username must be contain at least 4 letters'
		}
	},
}

const titleValidation = {
	required: 'Title is required',
}

const dateValidation = {
	required: 'Date is required',
}

const descriptionValidation = {}

export const inputValidations = {
	email: emailValidation,
	password: passwordValidation,
	username: usernameValidation,
	title: titleValidation,
	date: dateValidation,
	description: descriptionValidation,
}

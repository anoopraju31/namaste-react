export const checkValidateData = (name, email, password) => {
	const nameRegex = /^[A-Za-z-\'\s]+$/
	const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

	const isNameValid = nameRegex.test(name)
	const isEmailValid = emailRegex.test(email)
	const isPasswordValid = passwordRegex.test(password)

	if (!isNameValid) return 'Name is not valid.'
	if (!isEmailValid) return 'Email ID is not valid.'
	if (!isPasswordValid) return 'Password is not valid.'

	return null
}

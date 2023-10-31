import { useEffect, useState } from 'react'

const User = ({ name, location, contact }) => {
	const [count, setCount] = useState(0)
	const [count2, setCount2] = useState(0)

	useEffect(() => {
		// Make API calls
		// const timer = setInterval(() => {
		// 	console.log('1s interval')
		// }, 1000)

		console.log('useEffect')

		return () => {
			// clearInterval(timer)
			console.log('useEffect return')
		}
	}, [])

	console.log('render')

	return (
		<div className='user-card'>
			<h1> Count: {count} </h1>
			<h1> Count2: {count2} </h1>
			<h2> Name: {name} </h2>
			<h3> Location: {location} </h3>
			<h4> Contact: {contact} </h4>
		</div>
	)
}

export default User

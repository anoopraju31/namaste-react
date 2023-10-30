import React from 'react'
import { User } from './'
import UserClass from './UserClass'

// const About = () => {
// 	return (
// 		<div>
// 			<h1> About </h1>
// 			<h2> This namaste react series </h2>

// 			<UserClass
// 				name='Anoop Raju (class)'
// 				location='adoor class'
// 				contact='anoop2019'
// 			/>
// 		</div>
// 	)
// }

// export default About

class About extends React.Component {
	constructor(props) {
		super(props)

		console.log('Parent Component Contructor Called!')
	}

	componentDidMount() {
		console.log('Parent Component Did Mount!')
	}

	render() {
		console.log('Parent Component Render!')
		return (
			<div>
				<h1> About </h1>
				<h2> This namaste react series </h2>

				<UserClass
					name='Anoop Raju (class)'
					location='adoor class'
					contact='anoop2019'
				/>
			</div>
		)
	}
}

export default About

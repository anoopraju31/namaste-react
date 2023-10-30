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
					location='Adoor class'
					contact='anoop2019'
				/>

				<User
					name='Hemanth (class)'
					location='Tirupati class'
					contact='hemanth2019'
				/>
				{/*<UserClass
					name='Kiran (class)'
					location='Ghaziabad class'
					contact='Kiran2019'
				/>

				<UserClass
					name='Anand (class)'
					location='Alappuzha class'
					contact='anand2019'
				/> */}
			</div>
		)
	}
}

export default About

// - Parent Component Contructor Called!
// - Parent Component Render!
// 		- Anoop Raju (class) Child Component Contructor Called!
// 		- Anoop Raju (class) Child Component Render!
//
//  	- Elon Musk (class) Child Component Contructor Called!
//  	- Elon Musk (class) Child Component Render!
//
// 		- Anoop Raju (class) Child Component Did Mount!
// 		- Elon Musk (class) Child Component Did Mount!
// - Parent Component Did Mount!

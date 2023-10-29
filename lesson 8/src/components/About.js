import React from 'react'
import { User } from './'
import UserClass from './UserClass'

const About = () => {
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

export default About

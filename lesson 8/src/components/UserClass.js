import React from 'react'

class UserClass extends React.Component {
	constructor(props) {
		super(props)
		// console.log(props)
		console.log(this.props.name + ' Child Component Contructor Called!')
		this.state = {
			userInfo: {
				name: 'Dummy',
				location: 'default',
				avatar_url: '',
			},
		}
	}

	async componentDidMount() {
		console.log(this.props.name + ' Child Component Did Mount!')
		const res = await fetch('https://api.github.com/users/anoopraju31')
		const data = await res.json()

		// console.log(data)

		this.setState({
			userInfo: data,
		})
	}

	componentDidUpdate() {
		console.log(this.props.name + ' Child Component did update')
	}

	componentWillUnmount() {
		console.log(this.props.name + ' Child Component will unmount!')
	}

	render() {
		const { contact } = this.props
		const { name, location, avatar_url } = this.state.userInfo

		console.log(this.props.name + ' Child Component Render!')

		return (
			<div className='user-card'>
				<h2> Name: {name} </h2>
				<h3> Location: {location} </h3>
				<h4> Contact: {contact} </h4>
				<img src={avatar_url} alt={name} />
			</div>
		)
	}
}

export default UserClass

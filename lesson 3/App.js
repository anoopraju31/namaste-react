import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
const jsxHeading = (
	<h1 className='head' tabIndex={3}>
		{<span> Hai </span>}
		Namaste React using JSX 🚀{' '}
	</h1>
)

// React Components
// Class Based Components - OLD
// Functional Components - NEW

// React Element
const Title = () => (
	<h1 className='head' tabIndex={3}>
		{' '}
		Namaste React using JSX 🚀{' '}
	</h1>
)

// React Functional Component
const HeadingComponent = () => {
	return (
		<div>
			<Title />
			{Title()}
			<h1> Namaste React Functional Component </h1>
			{jsxHeading}
		</div>
	)
}

// const HeadingComponent2 = () => <h1> Namaste React Functional Component </h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)

import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element - Object
const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React')

console.log(heading)

// JSX is not HTML
// JSX - HTML link or XML like syntax
const jsxHeading = (
	<h1 className='head' tabIndex={3}>
		{' '}
		Namaste React using JSX 🚀{' '}
	</h1>
)

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(jsxHeading)

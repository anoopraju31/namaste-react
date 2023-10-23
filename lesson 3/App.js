import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement(
	'div', // element type
	{ id: 'parent' }, //Props
	[
		React.createElement('div', { id: 'child1' }, [
			//children
			React.createElement('h1', {}, 'Hello World 1'),
			React.createElement('h2', {}, 'How Are You? 1'),
		]),
		React.createElement('div', { id: 'child2' }, [
			//children
			React.createElement('h1', {}, 'Hello World 2'),
			React.createElement('h2', {}, 'How Are You? 2'),
		]),
	],
)

console.log(parent) //Object

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent) //render() => converts the js object into html h1 tag

// Object -> HTML

const root = ReactDOM.createRoot(document.getElementById('root'))
const heading1 = React.createElement(
	'h1',
	{ id: 'heading' },
	'Hello World from React',
) //returns Object

console.log(heading1)

root.render(heading1) //render() => converts the js object into html h1 tag

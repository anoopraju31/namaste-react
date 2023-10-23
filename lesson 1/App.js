const root = ReactDOM.createRoot(document.getElementById('root'))
const heading1 = React.createElement(
	'h1',
	{ id: 'heading' },
	'Hello World from React',
)

root.render(heading1)

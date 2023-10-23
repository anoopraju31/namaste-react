/*
    <div id="parent">
        <div id="child">
            <h1> Hello World </h1>
        </div>
    </div>
*/

const parent = React.createElement(
	'div',
	{ id: 'parent' },
	React.createElement(
		'div',
		{ id: 'child' },
		React.createElement('h1', {}, 'Hello World'),
	),
)

console.log(parent) //Object

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent) //render() => converts the js object into html h1 tag

// Object -> HTML

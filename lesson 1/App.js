/*
    <div id="parent">
        <div id="child">
            <h1> Hello World </h1>
            <h2> How Are You? </h2>
        </div>
    </div>
*/

const parent = React.createElement(
	'div', // element type
	{ id: 'parent' }, //Props
	React.createElement('div', { id: 'child' }, [
		//children
		React.createElement('h1', {}, 'Hello World'),
		React.createElement('h2', {}, 'How Are You?'),
	]),
)

console.log(parent) //Object

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent) //render() => converts the js object into html h1 tag

// Object -> HTML

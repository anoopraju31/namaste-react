# Lesson - 1

## creating an html element with JavaScript

## Blocks of code

```
const heading = document.createElement('h1')
heading.innerHTML = 'Hello World'

const root = document.getElementById('root')
root.appendChild(heading)

```


## Using React
    First, add React & ReactDOM CDN scripts, then add your custom js script inside the body tag.
    
```
const heading = React.createElement('h1', {}, 'Hello World')
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
```

Here, the createElement function takes three arguments, namely name of html tag, an object containing the attributes of the specific html tag, and children.
if the element does not contain any inner html element then the child would be the text containered inside the element.

If the outter element contain an inner element inside the child will be another **React.createElement()**.
```

const parent = React.createElement('div', {id: 'parent'}, React.createElement('h1', {}, 'Hello World'))
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
```

if the parent element contains multiple children then it will a list or array of **React.createElement()** inside.

```
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
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
```

The **React.createElement()** function returns an object. this object is then transformed into html elements by the **render()**.

The **ReactDOM.createRoot()** function creates a root container where the html is rendered by react. All the elements present inside the root container element will be replaced by the render().

### example: 
#### before rendering:
```
		<div id="root">
			<h1>Hello world inside html </h1>
		</div>

```
#### React Code :
```
const heading = React.createElement('h1', {}, 'Hello World from React')
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)

```
#### After Rendering

```
		<div id="root">
			<h1>Hello world from React </h1>
		</div>

```

## Is React a framework or library?
React is a JavaScript libray. It is small js file that can be imported to our code. We can use react to work in small portion of code let say a header section, just by declaring the root as the header section all the content inside the header section will be rendered by react and it wont affect outside of the header section. We can even intrgrate react inside an existing project that uses some other js library like jQuery. it work seemlessly. Whereas for a framework we need to build an app from the begin and connot be intrgated with existing projects.
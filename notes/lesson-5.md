# Lesson 5

## Types of import/export
- There are 2 types of import/export
    - Default import/export
    - Named import/export

### Default import/export
- Used when there is only a single item in the file that needed to exported
- example
```
export default item
```
```
import item from 'file'
```
### Named import/export
- Used when multiple items are required to be exported from a file.
- example
```
export const item1 = []
export const item2 = {}
export const item3 = ''
```
```
import {item1, item2, item3} from 'file'
```

## React Hooks
- useState - React State Variable
```
const [state, setState] = useState(initialState)
```

- Whenever the react state variable updates, react will re-render the components.
- React keeps the UI sync with the data layer. In the data layer when we have a state variable, when the state variable updates the UI will be updated by re-rendering the components. This is very fast and uses less code compared to vanila JavaScript.

## Why react is fast?
- React is very efficient in DOM manipulation. React uses Virtual DOM, and React can efficiently findout the difference between the previous state's virtual DOM and updated state's virtual DOM and updates the UI by re-rendering the components.

## Reconciliation Algorithm (React Fiber)
- In React 16, a new algorithm to update DOM came out.
- Uses a Diffing algorithm to findout the difference between the virtual DOM.

## Actual DOM
```
<div>
    <div>
        <h1> Hello World </h1>
    </div>
</div>
```

## virtual DOM
- Virtual DOM is a representation of actual DOM.
- Virtual DOM is nested object. 
- It is basically a nested react element.

```
{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
        "children": {
            "type": "div",
            "key": null,
            "ref": null,
            "props": {
                "children": {
                    "type": "h1",
                    "key": null,
                    "ref": null,
                    "props": {
                        "children": " Hello World "
                    },
                    "_owner": null,
                    "_store": {}
                }
            },
            "_owner": null,
            "_store": {}
        }
    },
    "_owner": null,
    "_store": {}
}
```
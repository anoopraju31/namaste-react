# Lesson - 3

## JSX
- JSX is not HTML
- JSX has HTML like syntax but its not HTML.
- JSX is a react element, it returns an object which when rendered generates HTML.
- JSX is developed to make developers easier to understand the code.
- Instead of using nested createElement() which is hard to track by developers. JSX makes it easy to read and understand the code.

## is JSX a valid JavaScript
- JSX is not pure Javascript, Javascript Engines only understand ECMA Script.
- This means browser won't be able to understand JSX directly.
- JSX code is transcompiled before it reaches the JS Engine or browser in general.
- The Transcompilation is done by Babel

## Babel
- Babel Transcompile JSX code
- Transcompiler converts one code to another code.

## JSX Example
```javascript
const heading = <h1 className='heading'> Hello World </h1>

```

- In JSX the attributes uses Camel case but not in HTML
- If the JSX consists of multiple lines of code then it is nested inside "()". So Babel can understand where the JSX starts and ends.


## React Components
- There are two types of components :
    - Class Components (Old way)
    - Functional Components (New Way)


## Functional Components
- Functional component is regular javascript function that returns a react element.
- Basically, a function the returns a JSX
- Example

```javascript
const Heading = () => {
    return (
        <h1> Hello World </h1>
    )
}
```

```javascript
const Heading = () => <h1> Hello World </h1>
    
```

## Component Composition
- Composing Components inside another Components


```javascript
const Header = () => {
    return (
        <header>
            <Heading />
        </header>
    )
}
```

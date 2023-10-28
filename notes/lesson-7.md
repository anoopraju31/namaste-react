# Lesson 7

## useEffect hook
- Only callback function is mandatory, useEffect hook can work even without the dependency array.
- Without the dependency array, useEffect hook will be called everytime the component re-renders.
- If the dependency array is an empty array, useEffect hook will be called only once when the component initially renders.
- If the dependency inside the dependency array changes, useEffect hook will be called everytime the dependency state changes.

## useState hook
- Never create a useState hook outside a component. It will thrown an error.
- useState hook is used to create local state variables inside a functional component.
- Always use useState hook on the start of the component.
- Never create a state variable inside a conditional statement, this will create insistency in the app.
- never create state variables inside loops and functions.

## React Router DOM 
- createBrowserRouter() : function to create a router
- RouterProvider : RouterProvider is a provider component is render
- useRouterError : A hook the deals with route error handling

## Types of Routing in the Web Apps
1. Client Side Routing
2. Server Side Routing



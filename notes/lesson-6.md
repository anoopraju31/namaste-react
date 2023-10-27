  # Lesson 6
  
  ### Monolithic vs Microservices
-  A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services.

  ![Monolithic Architecture](https://wac-cdn.atlassian.com/dam/jcr:95b9a276-c524-42b1-8d06-ded56d589858/Monolithic%20architecture@2x.png?cdnVersion=1283 'Monolithic Architecture')
  
  ![Microservices Architecture ](https://wac-cdn.atlassian.com/dam/jcr:5308ccab-dc94-46f5-978c-8a77b8d5be57/Microservice%20architecture@2x.png?cdnVersion=1283 'Microservices Architecture')
  
  |Monolithic|Microservices|
  |-----------|-----------|
  |Monolithic applications have a single, unified codebase.|Microservices applications consist of separate, individual services.|
  |Application components in monoliths are tightly coupled, and changes can impact multiple areas.|Microservices emphasize loose coupling between services, allowing for independent development and maintenance.|
  |Scaling a monolithic app involves duplicating the entire application, which can be inefficient.|Microservices enable individual services to be scaled independently, improving resource utilization.|
  |Monolithic apps are easier to develop and deploy initially.|Microservices can be more complex to develop and deploy but offer flexibility by allowing independent service development and deployment.|
  |Monolithic apps usually use a single technology stack for the entire application.|Microservices can employ various technology stacks for different services, offering flexibility in tool selection.|
  |Testing and maintenance in monolithic apps can be complex due to interdependencies.|Microservices simplify testing and maintenance as changes are localized to individual services, reducing regression testing scope.|
  |Monolithic apps can be resource-intensive, often running on a single or limited number of servers.|Microservices can make more efficient use of resources, optimizing services for specific workloads.|
  
  
  ### Different approaches of fetch data from api and rendering UI
  1.    Load >>> Fetch >>> Render
        - As soon as the page loads, an api call request has been send and waits till the response recivied and as soon as the response recived UI is rendered.
  2.    Load >>> Render >>> Fetch >>> Re-render
        - Page loads and renders the initial UI and make a call the to the API and wait for data to be fetched. As soon as the data comes the UI is re-rendered with the data.
        - This is the react way of fetching and render
        - Better UX approach

### useEffect Hook
- Hook: A hook is a normal javascript function which react provides and has specific use cases.
- useEffect hook takes 2 parameters
    - A callback function, which will be called after the component get rendered.
    - Dependency array

**Note:** Whenever a react state changes the whole component inside which the state is present will be re-rendered.


### Why react is faster?
React is faster because of React Fiber, a reconciliation algorithm, which finds out the difference between the virtual DOM of previous state and virtual DOM of present state and updates the actual DOM only when it required and only updates the portion that has changed. This faster updation of DOM makes react faster.

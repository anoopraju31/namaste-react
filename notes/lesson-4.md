# Lesson 4

## Config Driven UI
- Website driven by data/config
- Consider the carousel section in swiggy's website, the data shown in the UI varies with location. the offers avaliable in kochi is not the same as that avaliable in mumbai, so how do the show it. 
- UI is generated once and the UI changes depending on the data from the backend.
- Not only the data shown but also the looks of the UI.

## Keys
- Key lets a component uniquely identify, while rendering a list of components.
- This helps prevent re-rendering of components when the list containing the data changes.
- Using index as a key is bad practice, as index will change when changes happens to the list. this will result in re-rendering of all the components. 
# Lesson - 2

## NPM
- Package manager for node.js (JavaScript in general)
- It is a repository that manages all the js modules (dependencies).
- NPM not stand for Node Package Manager, its just npm! 

## Package.json
- Configuration for npm
- It keep track of all the dependencies in a project and all manages the versions of the dependencies.
- ^ => automatically updates to latest minor updated versions of the dependencies
- ~ => automatically updates to latest major updated versions of the dependencies
- else it will remains in that particular version

## Dependencies
- There are two types of dependencies, namely -
    -   **Dev Dependency** : These dependencies are only required for developement environment.
    -   **Regular Dependency**: These dependencies are used throughout from development to production.
-   Dev dependencies are installed using the command
```
npm install -D <package name> 
```

## package-lock.json
- It maintains the log of the exact version of a dependency used in the project.

## node_modules
- All the dependencies of the project and there dependencies are stored under node_modules
- node_modules does not need to be tracked by git as it is generated from the package.json file.

## Bundlers
- Bundlers are used to build apps for production.
- It minifies, compresses, and caches the code base.
- While in development phase to it caches the file making it easy for to Hot Module replace
- Hot Module Replace (HMR) - Automatically reloads the page of any change in the code. the caching make it faster, as it only update the changed file and reloads the page.
- examples are webpack, vite, parcel
- bundler -> bundles app and ship for production.
- Create-React-App uses webpack and Babel to bundle react in background.

## .gitignore

- this let use store the names of the files & folders that git does not need to track.
- Files such as .env, and foldes like node_modules, .parcel-cache etc..

## Parcel 
- Dev Build
- Local Server
- HMR = Hot Moudle Replacement
- Parcel uses a file watching alogorithm written in C++
- Faster Builds - Caching
- Image  Optimization
- Minification of file
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - to support older browsers
- Diagonstics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different bunndles for dev & production

```
npx parcel index.html
```
or

```
npx parcel <Entry File Name>
```

**Note:** *While Bundling for production remove the "main" file(Entry File) from package.json as we also passes the entry file in the build command*


```
npx parcel build <Entry File Name>
```

- Bundling for development & production are different. 
- In production it is more optimized and as has smaller bundle size.
- In Parcel, the production build is stored in the folder **"dist"**.


## BrowserList
- browser list lets us config the production build for different verison of browsers.
- To Know more check out - browswelist package in npm
- *browserlist.dev* provides the overall browser coverage for different versions of browsers.
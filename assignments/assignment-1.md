# Episode 01 - Inception

1. What is Emmet ?
- Emmet is a shorthand code expansion tool used by web developers to quickly generate HTML and CSS code.
-  It allows us to write simple abbreviations and then expand them into complete code structures.
-  For example, the short Emmet abbreviation **html:5** will generate a HTML template
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```

2 Difference between a library and framework ? 


| Library                   | Framework                     |
|---------------------------|-------------------------------|
| A library is a collection of pre-written functions or code snippets that we can use as needed in our application.| A framework is a pre-built, structured foundation for our application that dictates its overall architecture and flow.|
|A Library is building a house from ground up, where we have control over how to arange and decorate it|A Framework is like buying a pre-built house, here we don't need to worry about the build, but have less control over the arrangement.|
|we have more control over your application's structure and flow.| we work within the framework's structure, following its conventions.|
| We call the library's functions when required.| The framework controls the flow, and we customize or extend it.|
|Eample: jQuery, React.js | Example Next.js, Nuxt.js|

3 What is CDN ? Why do we use it?
CDN stands for Content Delivery Network. It is a network of distributed servers strategically located in various data centers around the world to efficiently deliver web content, such as images, videos, scripts, and other assets, to users. CDNs work by caching and storing copies of these content items on their servers and then serving them to users from the server that is geographically closest to the user. CDN providers aim to reduce latency, increase website and content loading speeds, and enhance overall user experience.

4 Why is React known as React ? 
- When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. 
- The name “React” reflects this reactive nature of the library.
Even if there  is an syntax mistake weather on html or in js, it will react immediately and will throw error.
- The idea behind React is to build reusable components that can be rendered on the front-end, rather than writing a new piece of code every time you need to display something on the screen. 
- This makes it easier and more efficient to build complex user interfaces.

5 What is cross-origin in the script tag ?
- In web development, the "cross-origin" or "cross-origin request" typically refers to a situation where a web page is trying to make a request to a different domain (or origin) than the one that served the web page. 
- Browsers enforce a security policy called the "same-origin policy" to prevent web pages from making requests to different domains without proper permissions, as this can be a security risk.
- When you include a JavaScript file using a ***\<script>*** tag in an HTML document, you are essentially making a request to the server where the script file is hosted. If the script file is hosted on a different domain than the one where your web page is located, it's considered a cross-origin request.
- This attribute contains two values which are given below –

    -  anonymous: It has a default value. It defines a CORS request which will be sent without passing the credential information.

    - use-credentials: A cross-origin request will be sent with credentials, cookies, and certificate.

6 What is the difference between React and ReactDOM?
- React is a JavaScript library for building user interfaces using components.
- ReactDOM is a library within the React ecosystem that is used to render React components to the web browser's Document Object Model (DOM).


7 What is difference between react.development.js and react.production.js files via CDN ? 
The React library provides two versions of its JavaScript files: react.development.js and react.production.js. These files serve different purposes and are typically used in different stages of the development and deployment process. When serving these files via a Content Delivery Network (CDN), there are a few key differences between them:

File Size: The react.development.js file is typically larger in size compared to react.production.js. The development version contains additional code, comments, and debugging information that aids in development and troubleshooting. On the other hand, the production version is optimized for performance and has undergone various optimizations, including minification and removal of unnecessary code, resulting in a smaller file size.

Performance: The production version (react.production.js) is optimized for performance and is typically used in production environments. It includes various optimizations, such as dead code elimination, to make the React library run more efficiently. These optimizations help reduce the overall bundle size, improve runtime performance, and enhance the user experience.

Error Messages: The development version (react.development.js) provides more detailed error messages and warnings compared to the production version. This helps developers identify and diagnose issues during the development process. The development version includes additional checks and warnings to provide useful information when something goes wrong. However, these additional checks and messages are not included in the production version for performance reasons.

When using a CDN, it's common to load the development version (react.development.js) during development and debugging stages. This allows developers to take advantage of the detailed error messages and warnings provided by the development version for easier debugging. However, in production environments, it is recommended to use the production version (react.production.js) for better performance and reduced file size.

It's worth noting that the specific file names (react.development.js and react.production.js) may vary depending on the version and release of React you are using

#### 8) What are async and defer ? 
The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.

Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

In most cases, it doesn’t matter which attribute you use – both will improve performance by allowing the browser to continue parsing while waiting for JavaScript to download. However, there are some situations where one attribute may be preferable to the other.

Advantages of using the defer attribute

There are several advantages to using the defer attribute in your script tags:

Deferred scripts are guaranteed to run after the page has been loaded and parsed, so they can’t slow down the initial page load.

Since deferred scripts are not parsed until after the page has loaded, they can’t block the parsing of other elements on the page (such as images).

Deferred scripts can be updated independently of the rest of the page, which means that if you change a deferred script, you don’t have to re-parse and re-render the entire page.

Disadvantages of using the defer attribute

One is that it can potentially delay your page from loading. If you have a lot of scripts that use defer, they could all be trying to load at the same time and slow down your page.

Another disadvantage is that older browsers might not support defer, so your scripts might not load at all for some users.

Advantages of using the async attribute

When loading a large JavaScript file, using the async attribute can be beneficial. It tells the browser that it can go ahead and continue parsing the HTML document while the JavaScript file is being downloaded. This can reduce the perceived load time of the page because the browser can start to render elements sooner.

Disadvantages of using the async attribute

One of the biggest disadvantages of using async is that it can break the render-blocking CSS rule. This rule is important for ensuring that the page loads correctly and doesn’t appear blank while the JavaScript file is loading. If async is used, the CSS file will be downloaded as soon as the JavaScript file starts loading, which can cause problems if the JavaScript file is large or takes a long time to load.

Another disadvantage of async is that it can delay the loading of other resources on the page, such as images. This can cause a significant delay in the overall loading time of the page.

Finally, async can also cause issues with certain types of user scripts and extensions. These user scripts and extensions rely on being able to modify the DOM after the page has loaded, but if async is used they may not be able to do this because the DOM might not have already loaded by the time they run.

Conclusion

If you’re working with JavaScript, it’s important to understand the difference between async and defer attributes. Async allows your script to run as soon as it’s loaded, without blocking other elements on the page. Defer means your script will only execute after the page has finished loading. 
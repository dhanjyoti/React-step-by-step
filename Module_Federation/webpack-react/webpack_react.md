Webpack in react is a JavaScript module bundler that is commonly used with React to bundle and manage dependencies. It takes all of the individual JavaScript files and other assets in a project, such as images and CSS, and combines them into a single bundle that can be loaded by the browser.

* Step 1:
`npm init` - This will create a starter package and add a package.json file for us. This is where all the dependencies required to build this application will be mentioned.

* Step 2:
`npm i react react-dom --save` - For creating a simple React application, we need two main libraries, i.e, React and ReactDOM.

* Step 3: 
`npm i webpack webpack-dev-server webpack-cli --save--dev` - For creating webpack, so that we can bundle our app together. Not only bundle, but we will also require hot reloading which is possible using the webpack dev server. The `--save--dev` is to specify that these modules are just dev dependencies. 

* Step 4: 
`npm i babel-core babel-loader @babel/preset-react @babel/preset-env html-webpack-plugin --save-dev` -  To make sure that the code is readable by all browsers, we need a tool like babel to transpile our normal readable code for browsers. 
In the case of babel, we have loaded the core babel library first, then the loader, and finally 2 plugins or presets to work specifically with React and all the new ES2015 and ES6 onwards code.

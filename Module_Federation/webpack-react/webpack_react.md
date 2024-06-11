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

* Step 5: 
Create a `webpack.config.js` file in the root of the application structure.

```js
            const path = require("path");
            const HtmlWebpackPlugin = require("html-webpack-plugin");

            module.exports = {
                //This property defines where the application starts
                entry: "./src/index.js",

                //This property defines the file path and the file name which will be used for deploying the bundled file
                output: {
                    path: path.join(__dirname, "/dist"),
                    filename: "bundle.js",
                },

                //Setup loaders
                module: {
                    rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                        loader: "babel-loader",
                        },
                    },
                    ],
                },

                // Setup plugin to use a HTML file for serving bundled js files
                plugins: [
                    new HtmlWebpackPlugin({
                    template: "./src/index.html",
                    }),
                ],
            };
```

Here,
1. We start by requiring the default path module to access the file location and make changes to the file location.
2. We require the HTMLWebpackPlugin to generate an HTML file to be used for serving bundled Javascript file/files.
    * Then we have the export.modules object with some properties.
        1. `entry:'./src/index.js'` - It is used to specify which file webpack should start with to get the internal dependency graph created.
        2. 
        ```js
            output:{
                path: path.join(__dirname, '/dist'),
                filename: 'bundle.js'
            },
        ```
        The output property specifying where the bundled file should be generated and what the name of the bundled file would be. This done by the output.path and output.filename properties.
        3. 
        ```js
            module: {
                rules: [
                {
                    test: /\.js$/, 
                    exclude: /node_modules/,
                    use: {
                    loader: 'babel-loader'
                    }
                }
                ]
            }
        ```
        The loaders is to specify what webpack should do for specific type for file. The webpack out of box only understands Javascript and JSON, but if out project has any language used, this would be the place to specify what to do with that new language.
        4. 
        ```js
            plugins: [
                new HtmlWebpackPlugin({
                template: './src/index.html'
                })
            ]
        ```
        Plugins are used to extend the capabilities of webpack. Before a plugin can be used in the plugin array inside the module exports object, we need to require the same.
        This particular plugin will use the specified file in our src folder. It'll then use that as a template for our HTML file where all the bundled files will be automatically injected.

* Step 6:
Create a `.babelrc` file to use the babel preset we installed and take care of the ES6 classes and import statements in our code. Add the following lines of code to the `.babelrc` file.
`"presets": ["@babel/preset-env", "@babel/preset-react"]`

* Step 7:
We start by requiring both React and ReacrDOM inside index.js file in src folder, by adding the below lines -
```jsx
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './Components/App';

        ReactDOM.render(<App />, document.getElementById('app'));
```

* Step 8:
Create components folder inside src and create App.js file
```jsx
        import React, { Component } from 'react'

        class App extends Component {
        render() {
            return (
            <div>
                <h1>Webpack + React setup</h1>
            </div>
            )
        }
        }

        export default App;
```

* Step 9:
Now we need to enable hot reloading, in hot reloading every time a change is detected, the browser auto reloads the page and has the ability to build and bundle the entire application when the time comes.
We do this by adding script values in the package.json file. Remove the test property in the scripts object of your package.json file and add these two scripts:
```js
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
```

* Step 10:
Now we can start our reactr project by the command `npm start`, and ones we are ready to get the app bundled we just need to hit the command `npm build`, and webpack will create an optimised bundle in our project folder which we be deployed on any web server. 

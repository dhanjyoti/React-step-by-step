Step 1:
`npx create-react-app client1` - To create the react app.

Step 2:
`npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server` - When setting up a project using Module Federation with Webpack, the packages we have listed serve various essential purposes to ensure smooth development, bundling and deployment processes.
    1. `@babel/core`: Core Babel library for transforming modern Javascript into backward-compatible versions for older browsers.
    2. `@babel/preset-env`: A smart preset that allows us to use the latest Javascript without needing to micromanage syntax transforms.
    3. `@babel/preset-react`: Preset for transforming React JSX syntax into Javascript.
    4. `babel-loader`: Integrates Babel with Webpack to transpile Javascript files.
    5. `css-loader`: Resolves CSS imports and allows bundling CSS files to serve our bundles.
    6. `html-webpack-plugin`: Simplifies creation of HTML files to serve our bundles.
    7. `sass`: A CSS preprocessor that adds special features such as variables, nested rules, and mixins.
    8. `sass-loader`: Loads and compiles SCSS files into CSS.
    9. `style-loader`: Injects CSS into the DOM.
    10. `url-loader`: Transforms files into base64 URIs, which can be useful for handling images and fonts.
    11. `webpack`: The core library for Webpack, a module bundler.
    12. `webpack-cli`: Command-line interface for running Webpack commands.
    13. `webpack-dev-server`: A development server that provides live reloading and a friendly development environment.

Step 3: 
Create `webpack.config.js` file and provide the necessary configurations. This configuration will be different inside the host application.
```js
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const { ModuleFederationPlugin } = require('webpack').container;
        const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

        module.exports = {
        output: {
            path: path.join(__dirname, "/dist"), // the bundle output path
            filename: "bundle.js", // the name of the bundle
        },
        plugins: [
            new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
            }),
            new ModuleFederationPlugin({
            name: 'client',
            filename: 'remoteEntry.js',
            exposes: {
                './app': './src/App.js',
            }
            }),
            new ExternalTemplateRemotesPlugin(),
        ],
        devServer: {
            port: 3001, // you can change the port
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
            ],
        },
        };
```
It includes configurations to bundle Javascript, manage HTML, and handle styles and assets. 
    1. Basic Configuration:
```js
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const { ModuleFederationPlugin } = require('webpack').container;
        const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
```
These are the necessary imports for setting up path resolution, HTML template handling, module federation, and external template remotes.

    2. Output Configuration:
```js
        output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        },
```
This specifies where the bundled files will be output(in the `dist` directory) and the name of the main bundle file(`bundle.js`).

    3. Plugins:
```js
        plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new ModuleFederationPlugin({
            name: 'client',
            filename: 'remoteEntry.js',
            exposes: {
            './app': './src/App.js',
            }
        }),
        new ExternalTemplateRemotesPlugin(),
        ],
```
`HtmlWebpackPlugin`: This plugin simplifies the creation of an HTML file to include the Webpack bundles. It uses `src/index.html` as a template.
`ModuleFederationPlugin`:
    * `name`: Identifies this container as `client`.
    * `filename`: Specifies the name of the file that will act as the entry point for remote modules(`remoteEntry.js`).
    * `exposes`: Declares the modules that this container exposes to other containers. Here, it exposes `./src/App.js` as `./app`.
`ExternalTemplateRemotesPlugin`: This plugin facilitates loading remote modules defined in external templates, which is useful in Module Federation setups where remote modules are dynamically loaded.

    4. Dev Server Configuration: 
```js
        devServer: {
        port: 3001,
        },
```
Configures the development server to run on port 3001. This server provides live reloading and a development environment for testing the application.

    5. Module Rules:
```js
        module: {
            rules: [
                {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                },
                {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
                },
            ],
        },
```
* Javascript/JSX files: Uses `babel-loader` to transpile `.js` and `.jsx` files, excluding `node_modules`.
* Styles: Uses `style-loader`, `css-loader`, and `sass-loader` to handle and bundle styles(`.css`, `.scss`, `.sass`).
* Assets: Uses `url-loader` to handle images and fonts, allowing them to be included in the bundle. 

Step 4:
Create a `.babelrc` file in the root of the application. It will be same inside the host application.
```js
        {
            "presets": [
                "@babel/preset-env",
            ["@babel/preset-react", {"runtime": "automatic"}]
            ]
        }
```
* `@babel/preset-env`: 
    1. This preset automatically determines the Babel plugins and pollyfills we need based onn our target environments(which can be specified in a `browserslist` configuration).
    2. It helps us write modern Javascript(ES6+) and have it transpiled down to ES5 or other versions as required by our target browsers.

* `@babel/preset-react` with `{"runtime": "automatic"}`:
    1. `@babel/preset-react`: Enables Babel to transform JSX syntax into Javascript.
    2. `{"runtime": "automatic"}`: This configuration utilizes the new JSX transform introduced in React 17, which allows us to use JSX without having to import React at the top of our files. This makes our code cleaner and less error-prone.

**How this fits into Module Federation and Webpack**
* Unified Code Transformation: Ensuring that all federated modules are transpiled using the same Babel presets helps maintain a consistent codebase. This is critical when modules from different sources or teams are combined in a single application.

* Modern Javascript and React: By using `@babel/preset-env` and `@babel/preset-react`, we can write modern Javascript and REact code, which is then transpiled to be compatible with older browsers and environments. This compatibility is essential in a federated setup where different parts of the application might be deployed in various environments.

* Simplified Development: The automatic runtime for React's JSX transform reduces boilerplate code and the chance of errors, simplifying the development process. This is particularly beneficial in a large, modular system where maintaining consistent imports across many files can be cumbersome.

Step 5:
Make necessary changes inside the App.js file of the client application, whatever we want to show in the host application.

Step 6:
Create another `index.html` file inside the src folder. 
```js
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React with webpack without SSR</title>
        </head>
        <body>
            <div id="root"></div>

            <script src="bundle.js"></script>
        </body>
        </html>
```
It will serve as the entry point for our React application when bundled and run by Webpack.
Here are 3 points -
    1. Serve as the template for generating the final HTML file using `HtmlWebpackPlugin`.
    2. Privide a `div` with the ID `root`, which acts as the mount point for our React application.
    3. Include the Webpack-generated Javascript bundle (`bundle.js`) to ensure our React code runs in the browser.

Step 7: 
Change the script inside the package.json file of all the applications to
```js
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production"
```

Step 8:
install `npm i react-router-dom` in the host application. 

Step 9:
Create a `webpack.config.js` file inside the root of the host application with the following configuration -
```js
        const path = require("path");
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        const { ModuleFederationPlugin } = require('webpack').container;
        const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

        module.exports = {
        output: {
            path: path.join(__dirname, "/dist"), // the bundle output path
            filename: "bundle.js", // the name of the bundle
            publicPath: 'auto',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
            }),
            new ModuleFederationPlugin({
                name: 'host',
                remotes: {
                client: 'client@http://localhost:3001/remoteEntry.js',
                client2: 'client2@http://localhost:3002/remoteEntry.js',
                },
            }),
            new ExternalTemplateRemotesPlugin(),
        ],
        devServer: {
            port: 3000, // you can change the port
            historyApiFallback: true,
            static: {
            directory: path.resolve(__dirname, 'dist'),
            },
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader", "sass-loader", 'postcss-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
            ],
        },
        };
```
Here,
* `publicPath`: Set to `auto` to automatically determine the public path at runtime based on the current URL.
* `clean`: Ensures the output directory(`dist`) is cleaned before each build, removing old files.
* `name`: Identifies this container as `host`.
* `remotes`: Specifies remote applications (`client`) with their URLs where the `remoteEntry.js` files are located. These URLs point to the entry points of the remote modules.
* `port`: Runs the development server on port 3000.
* `historyApiFallback`: Ensures the single-page application(SPA) routes are correctly handled by redirecting 404 responses to `index.html`.
* `static`: Serves static files from the `dist` directory.

Step 10:
Create a `Client.js` file inside the src folder in the host application.
```jsx
        import React, { lazy, Suspense } from 'react';

        const Client1 = lazy(()=> import("client/app"));

        const Client = () => {
        return (
            <div>
                <Suspense fallback="Client 1 is loading...">
                    <Client1 />
                </Suspense>
            </div>
        )
        }

        export default Client;
```
**Why we create this file**
* Dynamic Import of Remote Modules:
    Module Federation allows different applications to share and consume modules at runtime. By using `lazy` and dynamic imports(`import("client/app")`), we can load remote modules only when they are needed, which can improve the initial load time of our application.

* Code splitting: 
    The `lazy` function enables code splitting, where the code for the remote component is split into a separate chunk. This chunk in only loaded when the component is rendered, reducing the initial bundle size.

* Asynchronous Loading with Fallback UI:
    The `Suspense` component provides a way to handle asynchronous loading of the remote component by displaying a fallback UI. This ensures that the user experience is smooth, even if there is a delay in loading the remote module.

* Microfrontend Architecture:
    Using Module Federation with `lazy` and `Suspense` supports a microfrontend archetecture, where different parts of the application(microfrontends) can be developed and deployed independently. This approach allows for greater flexibility and scalability in managing large applications.

Step 11:
Create a Layout file named `Root.js` where we can navigate between host and client application components.
```jsx
        import { Link } from "react-router-dom";

        const { Outlet } = require("react-router-dom");

        const Root = () => {
            return (
                <div className="flex flex-row flex-1 h-screen">
                <div className="flex flex-col gap-3 w-60 items-center pt-16 bg-green-200">
                    <Link className="bg-gray-600 px-3 py-2 w-fit text-white" to={"/"}>Home</Link>
                    <Link className="bg-gray-600 px-3 py-2 w-fit text-white" to={"/client1"}>Client 1</Link>
                    <Link className="bg-gray-600 px-3 py-2 w-fit text-white" to={"/client2"}>Client 2</Link>
                </div>
                <div>
                    <Outlet />
                </div>
                </div>
            );
        };
        export default Root;
```

Step 12:
Create another `index.html` file inside src for directing id="root" and bundle.js files.
```jsx
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>React with Webpack</title>
            <base href="/">
        </head>
        <body>
            <div id="root"></div>

            <!-- Notice we are pointing to `bundle.js` file -->
            <script src="bundle.js"></script>
        </body>
        </html>
```

Step 13:
Make necessary changes in the index.js file.
```jsx
        import React from "react";
        import ReactDOM from "react-dom/client";
        import "./index.css";
        import App from "./App";
        import reportWebVitals from "./reportWebVitals";
        import { createBrowserRouter } from "react-router-dom";
        import { RouterProvider } from "react-router-dom";
        import Root from "./Root";
        import Client from "./Client1";
        import Client2 from "./Client2";

        const root = ReactDOM.createRoot(document.getElementById("root"));

        const router = createBrowserRouter([
        {
            path: "/",
            element: (
            <Root/>
            ),
            children: [
            {
                index: true,
                element: <App />,
            },
            {
                path:"client1",
                element: <Client />,
            },
            ],
        },
        ]);

        root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
        );

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
```
* `createBrowserRouter`: Creates a router with browser history.
* `Router Configuration`: Defines the routes and their respective components:
    * `path:"/"`: The root path.
        * `children`: Nested routes under the root path.
            * `index: true`: The default route under the root path.
            * `element:<App/>`: Renders the `App` component.
        * `path:"client1"`: The path for the first client.
        * `element:<Client/>`: Renders the `Client` component.
* `RouterProvider`: Provides the router context to the application, enabling routing functionalities.

Step 14:
Finally we can start both the client and the host applications with the command `npm run dev` and start the applications.

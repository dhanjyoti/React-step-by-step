**Module Federation**
Module Federation is a method in which code can be split into smaller deployable modules that can be shared and consumed at runtime between applications.

**Webpack**
Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.

    Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

***Create 3 remote/client apps with different localhost, and a root/host app that will show reomte/client apps in click of a Button in left side of the same screen using module federation in next.js***

Step 1:
Create the app
- npx create-next-app@latest

Selected 
* App name
* Page router

Step 2:
Installed Webpack
- npm i webpack

Step 3: 
Installed Module Federation
- npm i @module-federation/nextjs-mf

**Did the same for the other 3 Remote apps**

Step 4:
configuration changed for -> `next.config.mjs`
```jsx
        import NextFederationPlugin from "@module-federation/nextjs-mf";    

        const nextConfig = {
        webpack(config, options) {
            if (!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                name: "home",
                filename: "static/chunks/remoteEntry.js",
                remotes: {
                    weather:
                    "weather@http://localhost:3001/_next/static/chunks/remoteEntry.js",
                    simple_interest:
                    "simple_interest@http://localhost:3002/_next/static/chunks/remoteEntry.js",
                    show_input:
                    "show_input@http://localhost:3003/_next/static/chunks/remoteEntry.js",
                },
                exposes: {},
                shared: {},
                })
            );
            }

            return config;
        },
        };

        export default nextConfig;
```
`NextFederationPlugin` - This plugin is used for module federation in a Next.js application, enabling different micro-frontends to share code and dependencies.

`webpack(config, options)` - config: The current Webpack configuration object.
                             options: An object containing options for the build process, including whether the build is for the server or client.

`if (!options.isServer)` - !options.isServer condition means that the following code block will only execute for the client-side build, not the server-side.

`name: "home"` - name: The name of the current application.

`filename: "static/chunks/remoteEntry.js"` - filename: The name of the output file for the federated module (here, "static/chunks/remoteEntry.js").

`remotes:` - remotes: An object defining remote applications that this application can consume. Each key is the name of a remote, and each value is the URL to the remote's remoteEntry.js file.

`weather: "weather@http://localhost:3001/_next/static/chunks/remoteEntry.js"` - weather: Points to the remote entry file of the "weather" micro-frontend hosted at http://localhost:3001.

`exposes: {}` - exposes: An object that would define modules from this application to be exposed to other micro-frontends. It is currently empty, meaning no modules are exposed.

`shared: {}` - shared: An object that would define shared dependencies between micro-frontends. It is currently empty.


Step 5:
Create a .env file an setup as ->
NEXT_PRIVATE_LOCAL_WEBPACK = true

Create a file named .env in the root directory of our Next.js project.
`NEXT_PRIVATE_LOCAL_WEBPACK` - This is a Next.js environment variable that, when set to true, tells Next.js to use a local installation of Webpack instead of the one bundled with Next.js.

    *   When working on a Next.js project, you might need to customize your Webpack configuration beyond what Next.js natively supports.
    *   By setting NEXT_PRIVATE_LOCAL_WEBPACK=true, Next.js will use the locally installed version of Webpack, allowing you to take advantage of specific Webpack plugins or configurations not included by default.


Step 6:
Change inside package.json for script: "dev": "next dev" to ->
    "dev": "NEXT_PRIVATE_LOCAL_WEBPACK=true next dev",

```jsx
"scripts": {
"dev": "NEXT_PRIVATE_LOCAL_WEBPACK=true next dev"
}
``` 
- The presence of NEXT_PRIVATE_LOCAL_WEBPACK=true influences the behavior of the Next.js build process, making it use the locally  installed version of Webpack instead of the bundled one.

Step 7:
Made Layout.js file inside src folder
```jsx
        import Link from "next/link";

        export default function Layout({ children }) {
        return (
            <div className="flex flex-row h-[100vw]">
            <div className="flex flex-col gap-5 w-[250px] px-10 pt-16 bg-blue-200 h-auto">
                <Link href={"/weather"} className="bg-orange-500 w-fit px-4 py-1 rounded-md">Weather</Link>
                <Link href={"/simple-interest"} className="bg-orange-500 w-fit px-4 py-1 rounded-md">Simple Interest</Link>
                <Link href={"/show-input"} className="bg-orange-500 w-fit px-4 py-1 rounded-md">Show Input</Link>
            </div>
            <div className="flex-1">{children}</div>
            </div>
        );
        }
```
- This Layout component creates a two-part layout:
    A vertical sidebar with links to different pages (/weather, /simple-interest, and /show-input).
    A main content area that displays the nested content (children).
    The component uses Next.js Link for navigation and flexbox for layout structure.

Step 8:
Wrap the _app.js file <Component {...pageProps}/> inside the Layout
```jsx
        import "@/styles/globals.css";
        import App from "next/app";
        import Layout from "./layout";

        function MyApp({ Component, pageProps }) {
        return (
            <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            </>
        );
        }
        MyApp.getInitialProps = async (ctx) => {
        const appProps = await App.getInitialProps(ctx);
        return appProps;
        };

        export default MyApp;
```
-     The MyApp component is a custom App component for a Next.js application.
    It imports global CSS styles and uses a Layout component to wrap all pages.
    It defines a static getInitialProps method to fetch initial props for the app, ensuring any necessary data fetching is done before rendering.
    The active page (Component) is rendered inside the Layout, and any props (pageProps) are passed to it.
    This structure ensures consistent layout and styling across all pages in the application.

Step 9:
Create files inside pages folder for the Remote files to show in the Root app 
```jsx
        import React from "react";

        import { lazy, Suspense, useEffect, useState } from "react";
        let RemoteTitle = () => null;
        if (process.browser) {
        //useCustomHook = require('shop/customHook').default;
        RemoteTitle = lazy(() => {
            return import("show_input/Home");
        });
        }

        export default function Page() {
        const [remoteTitle, setRemoteTitle] = useState(null);

        useEffect(() => {
            setRemoteTitle(true);
        }, []);
        return (
            <div>
            {remoteTitle ? (
                <Suspense fallback={<div>Loading...</div>}>
                <RemoteTitle />
                </Suspense>
            ) : null}
            </div>
        );
        }
```
-     Lazy Loading: The RemoteTitle component is lazily loaded from show_input/Home only in the browser environment, reducing the initial bundle size.
    State Management: A state variable remoteTitle is used to control when to render the lazily loaded component.
    Effect Hook: The useEffect hook sets remoteTitle to true after the component mounts, triggering the conditional rendering of the RemoteTitle component.
    Suspense: The Suspense component is used to display a loading indicator (<div>Loading...</div>) while the RemoteTitle component is being loaded.

Step 10:
Did the same for all the remote files, Except a different configuration in `next.config.mjs` for the remote apps & .env file will be added only in the Root app.
```jsx
import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "show_input",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            home: "home@http://localhost:3000/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            // "./Test": "./src/components/test.js",
            "./Home": "./src/pages/index.js",
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;
```
`remotes: {home: "home@http://localhost:3000/_next/static/chunks/remoteEntry.js"}` - remotes: An object defining remote applications that this application can consume.

    home: Points to the remote entry file of the "home" micro-frontend hosted at http://localhost:3000.

`exposes: {"./Home": "./src/pages/index.js"}` - exposes: An object defining which modules from this application are exposed to other micro-frontends.

    "./Home": Exposes the module located at ./src/pages/index.js under the name "Home".

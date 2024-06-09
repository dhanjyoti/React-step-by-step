1. Start with npx create-react-app client-app
Same for the host app

2. copy the packages from educative 
Same for the host as well 

3. create a .babelrc file for both the host and client and paste its configuration

4. in client, create a config folder and create webpack.client.js file and also a webpack.server.js and webpack.shared.js and module-federation.js and paste the setting from github

5. make changes in script of package.json from the github s2s 

6. now check error by running the app

7. install pnpm -D @module-federation/enhanced @module-federation/node rimraf

8. pnpm build again to test

9. create to folders client and server inside src and put all the files of src inside client

pnpm build again

10. make index.js middleware.js render.js server.entry.js files and make the required changes from github

11. create components file inside client of src, just move App.js inside it.

12. make required changes inside index.js file for the path

13. pnpm run build again for testing

14. pnpm i express, pnpm i react-helmet

15.  insert plugins for css loader in babel, - pnpm  i -D @babel/plugin-proposal-class-properties, We can install this directly above at first.

16. css loading  inside webpack.shared.js and install pnpm i -D loader css-loader sass-loader

17. pnpm build again to test

18. now again we need svg loader. copy the svg inline loader in webpack.shared.js again and install pnpm i -D svg-inline loader

19. build again to check

20. install pnpm i -D @babel/polyfill and then build again to check

21. if works then pnpm start

22. if we don't have 3000 working it will not work

23. copy all the setting of package.json inside host same as client

24. only change is inside config of webpack.client to port of host link

25. change host port to 3000

26. change module federation of host

27. copy the src folder of client and paste in the host and make changes accordingly

28. change App.js of host

29. change index.js middleware.js render.js of host

30. content.js file inside inside the client_app and paste the required from github

31. make update inside the server folder of client 

32. make folder inside server named as routes and make user.js file and paste required from git

33. copy the babelrc file from client to host

34. run both client and host app to test if its working

35. shared dependencies might clash inside module-federation.js of host so there we need to make required changes by searching eager: true setting

because both react from client and host cannot work together in host, this is context issue(the change is singleton: true)

It should work.


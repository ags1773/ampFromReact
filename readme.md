To run:
npm i && npm run serveDev


- webpack rebuilds bundle ./dist/bundle whenever there is a change (using webpack --watch)
- in a different process, nodemon monitors changes in ./dist, so it re-runs ./dist/server.js whenever bundle is rebuild
- so all you have to do, to see your changes is refresh the page!

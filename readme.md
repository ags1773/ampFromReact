## To run:
npm i && npm run serveDev

##  Bundling & nodemon
- webpack rebuilds bundle ./dist/bundle whenever there is a change (using webpack --watch)
- in a different process, nodemon monitors changes in ./dist, so it re-runs ./dist/server.js whenever bundle is rebuild
- so all you have to do, to see your changes is refresh the page!

## NOTES:
- You can't directly copy and paste scripts for amp components in the library. Because ```<script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>``` has boolean attribute `async`. React changes `async` (any boolean attr) to `async="true"`, which fails amp validation (see issue https://github.com/facebook/react/issues/9230). The workaround is to give `async=""`
- you might get warning `Warning: componentWillMount has been renamed, and is not recommended for use.`. This is an issue with react-helmet (See issue https://github.com/nfl/react-helmet/issues/499)
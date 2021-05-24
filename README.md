# React Dog Breeds

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It utilizes the Dog API:
https://dog.ceo/dog-api/documentation/

It is built using React Context, Hooks, and tested with React Testing Library

## File Structure

Src folder contains:

`components` - individual reusable components that make up the page UI 

`pages` - components that represent full pages in the UI and are made up of other componenents

`contexts` - global state context to be consumed by the app 

`reducers` - reducers that allow for easier state manipulation - all props fetching and manipulation happens in these files

`utils` - utility functions and constants


## Context API
Global State is used to keep all props that are fetched form the API to be consistant throughout the app. 

Props fetching happens on initial app load and all props manipulation happens in the utility function `mapDogProps.js`. The exception being props that change - the current and next dog props are all manipulatied on the reducer level. 
## Tests
Tests are done using React Testing Library and current tests are written in:

`src -> components -> DogGallery`
`src -> pages -> Home`


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


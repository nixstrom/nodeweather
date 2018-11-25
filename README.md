# This is Node Weather

This is a quick test project, to show off Node and server- and client side rendered React running in unison.

It uses:
* Node and Express on the server side
* React as a view engine (client and server side)
* Jest and Enzyme for tests
* WebPack and Babel for bundling

## How to use it
1. `git clone` this repo
2. `cd` into the directory
3. Install all dependencies by running `yarn` (presumably `npm` would also work).
4. Run `yarn start` to fire up the server
5. Go to `http://localhost:3000` to see it in action

Optional step 3a: This project has a `.nvmrc` file. You can run `nvm use` to switch to the same Node version (currently set up for latest LTS). You may need to run `nvm install`.

You can also run `yarn test` to run the tests, if you so please.

## Features
* It should show the weather for Copenhagen as a default – rendered from the server
* Changing the query parameter to `city={your city}` should show the weather for that city (again, server rendered)
* Using the form to type in a new city, and submitting, will fetch new data and render it on the client side
* Changing the city on the client side will also update the URL, and using the back/forward buttons will also update the view and the data
* Attempting to enter a invalid city will display an error message

## Limitations
* There is not 100% test coverage. A select few methods and views are covered.
* API mocking is not covered by testing.
*  There is some basic error handling, but not all cases are covered, and there is no distinction between invalid input and a server error, for example.
* We also assume correct input to all helper methods.
* There are also no special error pages (like 404 or 5xx).
* There are no loaders – fast response time is assumed.

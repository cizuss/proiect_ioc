# Boilerplate

My own frontend boilerplate for a [React](https://facebook.github.io/react/)/[Redux](https://github.com/rackt/redux) project.

I use [Webpack](https://webpack.github.io) for packaging. [Babel](http://babeljs.io/) is configured with [stage-0](https://babeljs.io/docs/plugins/preset-stage-0/) (ES6+ES7) and [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) support. CSS is passed through [SaSS](http://sass-lang.com) and [autoprefixer](https://github.com/postcss/autoprefixer).

The [Redux dev tools](https://github.com/gaearon/redux-devtools) are built in and hot reload is configured for reducers and React components.

# Usage

`npm start` to start watching with [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)

`npm run build` to build for production

You can check if you're in development or production mode with `if (__DEV__)`

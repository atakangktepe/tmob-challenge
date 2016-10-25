# Tmobtech Interview Challenge

## Features

* [React](http://facebook.github.io/react/), for View Layer.
* [Webpack](http://webpack.github.io/) for asset bundling.
* [Babel](https://babeljs.io/) for ES6+ transpilation.
* [SASS](http://sass-lang.com/) (SCSS or Sass style), [Less](http://lesscss.org/), and [Autoprefixer](https://github.com/postcss/autoprefixer) enabled by default through Webpack.
* Production configuration with best practices applied for optimizing React file size. The bundled JS file produced from this example is right at 40KB minified and gzipped. See [Building](https://github.com/atakangktepe/tmob-challenge#building) below for more info.
* Built-in command for publishing your app to GitHub pages. See [Building](https://github.com/atakangktepe/tmob-challenge#building) below for more info.
* [Optional support for ESLint via babel-eslint](https://github.com/atakangktepe/tmob-challenge#linting).

## Usage

Clone this repo, then run:

```
npm install
npm start
```

That will fire up a webpack dev server in **hot** mode. Most changes will be reflected in the browser automatically without a browser reload. You can view the app in the browser at `http://localhost:8080`.

## Building

To generate a production build, run:

```
npm run build
```

The above command will generate a `dist` folder with the appropriate index.html file along with the minified CSS and JS files.

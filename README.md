# [spy-on-prop-types](https://github.com/reaktivo/spy-on-prop-types/)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/reaktivo/spy-on-prop-types/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@reaktivo/spy-on-prop-types.svg?style=flat)](https://www.npmjs.com/package/@reaktivo/spy-on-prop-types)
[![Coverage Status](https://img.shields.io/codecov/c/github/reaktivo/spy-on-prop-types.svg)](https://codecov.io/gh/reaktivo/spy-on-prop-types)
[![CircleCI Status](https://circleci.com/gh/reaktivo/spy-on-prop-types.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/reaktivo/spy-on-prop-types) [![Greenkeeper badge](https://badges.greenkeeper.io/reaktivo/spy-on-prop-types.svg)](https://greenkeeper.io/)

spy-on-prop-types is a small library that allows you to spy on your propTypes definitions.

## Installation

```sh
npm install @reaktivo/spy-on-prop-types
```

## Usage

You should first start by registering the library so it can spy on your propTypes definitions

```js
import "spy-on-prop-types/register";
```

After that, you will be able to access your propTypes passed arguments by
accessing the `definition` and the `required` property of a propType.

```js
MyComponent.propTypes = {
  options: PropTypes.oneOf(["a", "b", "c"]).isRequired
};

console.log(MyComponent.propTypes.options);

/*
{
  definition: ["a", "b", "c"],
  required: true,
}
*/
```

## License

spy-on-prop-types is open source software [licensed as MIT](https://github.com/reaktivo/spy-on-prop-types/blob/master/LICENSE).

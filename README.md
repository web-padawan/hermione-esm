# hermione-esm

This is a [`hermione`](https://github.com/gemini-testing/hermione) plugin that starts [`es-dev-server`](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) before running tests.

## Installation

`npm install hermione-esm`

## Configuration

```js
module.exports = {
  // ...
  plugins: {
    'hermione-esm': {
      port: 8081
    }
  },
  //...
}
```

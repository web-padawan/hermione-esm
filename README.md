# hermione-esm

This is a [`hermione`](https://github.com/gemini-testing/hermione) plugin that starts [`@web/dev-server`](https://modern-web.dev/docs/dev-server/node-api/) before running tests.

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

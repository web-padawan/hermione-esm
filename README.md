# hermione-esm

This is a `hermione` plugin that starts express server with bare module specifiers transform before running tests.

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

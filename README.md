# hot-loader-replace-issue

```
npm install
npm run start
```

invoke times should be 2.

## root cause

`react-hot-loader/babel` will replace `hot(module)` code in the following format

```
export default compose(
  withDebug,
  withDebug,
  hot(module)
)(App);
```

into a wrong code.

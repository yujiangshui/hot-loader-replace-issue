# hot-loader-replace-issue

```
npm install
npm run start
```

and the number should be 2.

## root cause

`react-hot-loader/babel` will replace `hot(module)` code in the following code

```
export default compose(
  withDebug,
  withDebug,
  hot(module)
)(App);
```

and compiled to a wrong code.

## Examples

enable `react-hot-loader/babel` in `.babelrc`, and write the following code:

```
export default compose(
  withDebug,
  withDebug,
  hot(module)
)(App);
```

will be compiled to:

```
/* harmony default export */ var Component = (withDebug(App));
// CONCATENATED MODULE: ./App.js
```

**It doesn't work.**

---

comment out `react-hot-loader/babel` in `.babelrc`, and write the following code:

```
export default compose(
  withDebug,
  withDebug,
  hot(module)
)(App);
```

will be compiled to:

```
/* harmony default export */ __webpack_exports__["a"] = (lodash_fp_compose__WEBPACK_IMPORTED_MODULE_2___default()(withDebug, withDebug, Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module))(App));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(255)(module)))
```

**It works.**

---

enable `react-hot-loader/babel` in `.babelrc`, and write the following code:

```
export default compose(
  hot(module),
  withDebug,
  withDebug
)(App);
```

will be compiled to:

```
/* harmony default export */ __webpack_exports__["a"] = (lodash_fp_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module), withDebug, withDebug)(App));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(132)(module)))
```

**It works. Interesting.**

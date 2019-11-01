import React from 'react';
import { hot } from 'react-hot-loader';
import compose from 'lodash/fp/compose';

function App(props) {
  return (
    <h1>
      times should be 2: <span style={{ color: 'red' }}>{props.debug}</span>
    </h1>
  );
}

function withDebug(WrappedComponent) {
  return props => {
    const { debug = 0 } = props;
    return <WrappedComponent {...props} debug={debug + 1} />;
  };
}

export default compose(
  withDebug,
  withDebug,
  hot(module)
)(App);

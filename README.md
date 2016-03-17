# redux-fireuser

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][climate-image]][climate-url]
[![Code Coverage][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Code Style][code-style-image]][code-style-url]

> Redux middleware, actions, and reducers for [Fireuser](https://github.com/prescottprue/fireuser)

## Getting Started

### Install through NPM

1. Install: `npm install --save redux-fireuser`

## Documentation

### Middleware

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'; // Combined reducers
import thunkMiddleware from 'redux-thunk';
import { createMiddleware } from 'redux-fireuser';

let fireuserMiddleware = createMiddleware('testApp');
const createStoreWithMiddleware = compose(
  // Save for redux middleware
  applyMiddleware(thunkMiddleware, fireuserMiddleware)
)(createStore);
```

### Reducers

```javascript
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { Reducers } from 'redux-fireuser';
const rootReducer = combineReducers({
  account: Reducers.account,
  entities: Reducers.entities,
  router: routerStateReducer
});

export default rootReducer;
```

### Actions

```javascript
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'redux-fireuser';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  onLoginClick = (e) => {
    e.preventDefault()
    this.props.login({username: 'test', password: 'asdfasdf'})
  };
  render() {
    return (
      <div className="App">
        <button onClick={ this.onLoginClick }>Login</button>
      </div>
    )
  }
}
// Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    account: state.account
  };
}
// Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
```

[npm-image]: https://img.shields.io/npm/v/redux-fireuser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/redux-fireuser
[npm-downloads-image]: https://img.shields.io/npm/dm/redux-fireuser.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/prescottprue/redux-fireuser/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/prescottprue/redux-fireuser
[daviddm-image]: https://img.shields.io/david/prescottprue/redux-fireuser.svg?style=flat-square
[daviddm-url]: https://david-dm.org/prescottprue/redux-fireuser
[climate-image]: https://img.shields.io/codeclimate/github/prescottprue/redux-fireuser.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/prescottprue/redux-fireuser
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/prescottprue/redux-fireuser.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/prescottprue/redux-fireuser
[license-image]: https://img.shields.io/npm/l/redux-fireuser.svg?style=flat-square
[license-url]: https://github.com/prescottprue/redux-fireuser/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/

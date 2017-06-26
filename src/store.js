import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

const enhancers = compose(
  window.devToolsExtension ? window.dev ToolsExtension() : f => f 
)

const store = createStore(rootReducer, {}, enhancers)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReduer);
  });
}

export default store;
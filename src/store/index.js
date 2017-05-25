import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { saga } from "../sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    compose(applyMiddleware(createLogger(), sagaMiddleware))
  );

  sagaMiddleware.run(saga);
  return store;
};

export default configureStore;

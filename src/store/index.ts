import { createStore, Store, applyMiddleware } from "redux";
import { RepositoriesState } from "./ducks/repositories/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import createSagaMiddleware from "redux-saga";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;

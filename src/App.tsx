import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import RepositoryList from "./components/RepositoryList";

const App = () => {
  return (
    <Provider store={store}>
      <RepositoryList></RepositoryList>
    </Provider>
  );
};

export default App;

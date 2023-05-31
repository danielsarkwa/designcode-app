import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./Navigator/AppNavigator";

const initialState = {
  action: "",
  name: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" }; // state object
    case "CLOSE_MENU":
    case "CLOSE_MENU":
      return { action: "closeMenu" }; // state object
    case "CLOSE_MENU":
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state; // return the initial state object, if no action has been dispatched
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;

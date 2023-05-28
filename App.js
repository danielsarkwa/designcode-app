import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./Screens/HomeScreen";

const initialState = {
  action: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" }; // state object
    case "CLOSE_MENU":
      return { action: "closeMenu" }; // state object
    default:
      return state; // return the initial state object, if no action has been dispatched
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;

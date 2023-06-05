import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./Navigator/AppNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/xld9kxyrxj5l/",
  cache: new InMemoryCache(),
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 76BHLlDB7BTv8KkbKZZfC2xy7fb-joMQBbJl0iuZomU`,
  },
});

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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;

import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./bugs/reducer";

export default function configureStore() {
  const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  return store;
}

// store is obj consists of
// dispatch -> used for dispatching actions
// subscribe -> get notify everytime when state is changed (used by the UI layer)
// getState -> getting the current state
// replaceReducer
// Symbol

// We don't have property to setting up the store *

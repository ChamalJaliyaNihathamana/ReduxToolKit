import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";

export default function () {
  // root reducer is used here
  return configureStore({ reducer });
}

// store is obj consists of
// dispatch -> used for dispatching actions
// subscribe -> get notify everytime when state is changed (used by the UI layer)
// getState -> getting the current state
// replaceReducer
// Symbol

// We don't have property to setting up the store *
